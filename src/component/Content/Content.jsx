import React from 'react'
import './Content.css'
import { contentData } from '../../data/Content'

const Content = () => {
  return (
    <div className='content'>
        {
            contentData.map((item, index) => (
                <div className="content-info" key={index}>
                    <div><item.icon /></div>
                    <h1>{item.title}</h1>
                    <ul>
                        {
                            item.details.map((detail, lidex) => (
                                <li key={lidex}>{detail}</li>
                            ))
                        }
                    </ul>
                    <button className='btn content-button'>Learn More</button>
                </div>
            ))
        }
    </div>
  )
}

export default Content