import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import styles from './styles.module.css'


export function CountingDown() {
	const taskContext = useTaskContext();

	console.log(taskContext)

	return (
		<div className={styles.container}>
			{taskContext.state.formattedSecondsRemaining}
		</div>
	)
}