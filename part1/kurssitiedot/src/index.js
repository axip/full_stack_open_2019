import React from 'react'
import ReactDOM from 'react-dom'


const Part = (props) => {
    return (
        <div>
            <p>{props.osa} {props.luku}</p>
        </div>
    )
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part osa = {props.osa1} luku = {props.teht1}/>
            <Part osa = {props.osa2} luku = {props.teht2}/>
            <Part osa = {props.osa3} luku = {props.teht3}/>
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.luku}</p>
        </div>
    )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
        <Header course={course} />
        <Content    osa1 = {part1} teht1 = {exercises1}
                    osa2 = {part2} teht2 = {exercises2} 
                    osa3 = {part3} teht3 = {exercises3} 
         />
        <Total luku = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))