import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { addAlert, Alert } from '../store/slices/alertSlice'
import { removeAlert } from '../store/slices/alertSlice'

export default function Alerts() {

    const alerts = useSelector((state: RootState) => state.alertReducer)
    const dispatch = useDispatch()
    useEffect((): void => {
        alerts.forEach(alert=>dispatch(removeAlert(alert)))
    }, [])

    return <div className="alerts">
        {
            alerts.map(
                (alert, idx) => <div key={idx} className={`alert alert-${alert.isError ? 'danger' : 'success'}`}>{alert.message}</div>
            )
        }
    </div>
}