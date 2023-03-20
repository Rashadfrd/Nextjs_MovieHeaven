import React from 'react'
import Skeleton from '../skeleton'
import styles from './styles.module.css'

const CategoriesLoading = () => {
  return (
    <div className={styles.categoriesWrapper}>
        <div className={styles.categories}>
            {
                Array(5).fill(null).map((item,index)=>{
                    return <div key={index} className={styles.category}><Skeleton /></div>
                })
            }
      </div>
    </div>
  )
}

export default CategoriesLoading
