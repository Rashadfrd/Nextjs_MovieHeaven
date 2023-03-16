import React from 'react'
import Skeleton from '../skeleton'
import styles from './styles.module.css'

const CategoriesLoading = () => {
  return (
    <div className={styles.categoriesWrapper}>
        <div className={styles.categories}>
            {
                Array(5).fill(null).map((item,index)=>{
                    return <Skeleton key={index}/>
                })
            }
      </div>
    </div>
  )
}

export default CategoriesLoading
