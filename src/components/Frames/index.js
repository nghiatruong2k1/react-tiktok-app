import {memo} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const variants = {
	square:true,
	rectangle:true,
	circle:true
}
function FramesComponent({loading,children,variant,height,...props}){
		return(
			<div className={styles.frame}>
				<div 
					className={clsx(styles.container,{
						[styles[variant]]:variants[variant]
					})}
					style={{padding:height}}
				>
					<div className={clsx(styles.content)}>
						{children}
					</div>
				</div>
			</div>
		);
};
export default memo(FramesComponent);