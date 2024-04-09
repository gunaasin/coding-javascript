import React from 'react'
import Output from '../components/Output'
import CodeEditor from '../components/CodeEditor'

export const Rightbox = () => {
  return (
    <div className='rightbox'>
        <div className="terminal">
            <CodeEditor/>
        </div>
        <div className="console"></div>
    </div>
  )
}
