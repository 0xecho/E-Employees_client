import { put, takeEvery, all, fork, call, SagaReturnType } from 'redux-saga/effects'
import api from '../api'
import { 
    EmployeeAction, 
    set_employees, 
    create_employee, 
    update_employee, 
    delete_employee } from '../slices/employeeSlice'

function* create_employee_worker(action: EmployeeAction) {
    const response: SagaReturnType<typeof api.create_employee> = yield call(
        api.create_employee,
        action.payload
    )
    yield put(create_employee(action.payload))
}

function* fetch_employee_worker() {
    const response: SagaReturnType<typeof api.fetch_employees> = yield call(
        api.fetch_employees
    )
    yield put(set_employees(response.data))
}

function* update_employee_worker(action: EmployeeAction) {
    const response: SagaReturnType<typeof api.update_employee> = yield call(
        api.update_employee,
        action.payload
    )
    yield put(update_employee(action.payload))
}

function* delete_employee_worker(action: EmployeeAction) {
    const response: SagaReturnType<typeof api.delete_employee> = yield call(
        api.delete_employee,
        action.payload
    )
    yield put(delete_employee(action.payload))
}

function* watchEmployeeAdded() {
    yield takeEvery('employees/create_employee', create_employee_worker)
}

function* watchEmployeeFetched() {
    yield takeEvery('employees/fetch_employee', fetch_employee_worker)
}

function* watchEmployeeUpdated() {
    yield takeEvery('employees/update_employee', update_employee_worker)
}

function* watchEmployeeDeleted() {
    yield takeEvery('employees/delete_employee', delete_employee_worker)
}

export default function* rootSaga() {    
    yield all([
        fork(watchEmployeeAdded),
        fork(watchEmployeeFetched),
        fork(watchEmployeeUpdated),
        fork(watchEmployeeDeleted)
    ])
}
