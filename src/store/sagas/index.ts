import { put, takeEvery, all, fork, call, SagaReturnType } from 'redux-saga/effects'
import api from '../api'
import {
    EmployeeAction,
    set_employees,
    set_total_pages,
    set_page,
    create_employee,
    update_employee,
    delete_employee
} from '../slices/employeeSlice'
import {
    addAlert,
    AlertAction
} from '../slices/alertSlice'
import { Pagination } from '../types'
import { PayloadAction } from '@reduxjs/toolkit'

function* create_employee_worker(action: EmployeeAction) {
    try {
        const data: SagaReturnType<typeof api.create_employee> = yield call(
            api.create_employee,
            action.payload
        )
        yield put(create_employee(data))
    }
    catch (error: any) {
        yield put(addAlert({
            isError: true,
            message: `Could not create employee: ${error.message}`
        }))
    }
}

function* fetch_employee_worker(action: PayloadAction<Pagination>) {
    try {
        const pagination = action.payload ? action.payload : { page: 1, limit: 10 }
        const data: SagaReturnType<typeof api.fetch_employees> = yield call(
            api.fetch_employees,
            pagination
        )
        yield put(set_employees(data.employees))
        yield put(set_total_pages(data.totalPages))
    } catch (error: any) {
        yield put(addAlert({
            isError: true,
            message: `Could not fetch employees: ${error.message}`
        }))
    }
}

function* update_employee_worker(action: EmployeeAction) {
    try {
        const data: SagaReturnType<typeof api.update_employee> = yield call(
            api.update_employee,
            action.payload
        )
        yield put(update_employee(data))
    } catch (error: any) {
        yield put(addAlert({
            isError: true,
            message: `Could not update employee: ${error.message}`
        }))
    }
}

function* delete_employee_worker(action: EmployeeAction) {
    try {
        const data: SagaReturnType<typeof api.delete_employee> = yield call(
            api.delete_employee,
            action.payload
        )
        yield put(delete_employee(action.payload))
    } catch (error: any) {
        yield put(addAlert({
            isError: true,
            message: `Could not delete employee: ${error.message}`
        }))
    }
}

function* watchEmployeeAdded() {
    yield takeEvery('employees/create_employee_requested', create_employee_worker)
}

function* watchEmployeeFetched() {
    yield takeEvery('employees/fetch_employee', fetch_employee_worker)
}

function* watchEmployeeUpdated() {
    yield takeEvery('employees/update_employee_requested', update_employee_worker)
}

function* watchEmployeeDeleted() {
    yield takeEvery('employees/delete_employee_requested', delete_employee_worker)
}

export default function* rootSaga() {
    yield all([
        fork(watchEmployeeAdded),
        fork(watchEmployeeFetched),
        fork(watchEmployeeUpdated),
        fork(watchEmployeeDeleted)
    ])
}
