import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { addAlert, Alert } from '../store/slices/alertSlice'
import { removeAlert } from '../store/slices/alertSlice'
import { shallowEqual } from 'react-redux'

export default function Alerts() {

    const alerts = useSelector((state: RootState) => state.alertReducer)
    const dispatch = useDispatch()
    
    useEffect((): void => {
        alerts.map((alert: Alert) => {
            setTimeout(() => {
                dispatch(removeAlert(alert))
            }, 5000)
        })
    }, [alerts])

    return <div className="alerts">
        {
            alerts.map(
                (alert, idx) => <div key={idx} className={`alert alert-${alert.isError ? 'danger' : 'success'}`}>
                    {alert.message}
                    <button onClick={() => dispatch(removeAlert(alert))}>X</button>
                    </div>
            )
        }
    </div>
}