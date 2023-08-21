import React from 'react'
import { Main1 } from '../comp/home/Main1'
import { Main2 } from '../comp/home/Main2'
import { Main3 } from '../comp/home/Main3'
import { Main4 } from '../comp/home/Main4'
import { Main5 } from '../comp/home/Main5'
import { Footer } from '../comp/Footer'


export default function Home() {
  return (
    <div className="home">
        <Main1/>
        <Main2/>
        <Main3/>
        <Main4/>
        <Main5/>
        <Footer/>
    </div>
  )
}
