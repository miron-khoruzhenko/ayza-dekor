import React from 'react'
// import styled from 'styled-components'
import CountUp from 'react-countup'
import styled from 'styled-components'

function CounterBlock(props){
	return(
		<div className="py-2 px-2 text-white text-center w-1/3">
			<div className="tracking-widest text-6xl font-bold ">			
			<CountUp 
				end={props.number}
				duration={3}
				delay={0}
				enableScrollspy={true}
				scrollSpyOnce={true}
			/></div>
			<div className="text-2xl">{props.name}</div>
		</div>
	)
}

export const Counter = () => {
  return (
	<WholeLine className=''>
		<div className="inner">
			<div className="container counter-container">
				<CounterBlock number={1057} name={'Products'}/>
				<CounterBlock number={837} name={'Customers'}/>
				<CounterBlock number={13} name={'Countries'}/>
				

			</div>

		</div>
	</WholeLine>
  )
}

const WholeLine = styled.div`
	width: 100%;
	padding: 0rem 0;
	background-color: #101522;

	.inner{
		background-color: #a98054;
		width: 100%;
		padding: 2rem 0;

		.counter-container{
			display: flex;
			justify-content: space-around;
			align-items: center;
			margin: 0 auto;
		}

		.container {
			width: 100%;
		}
		@media (min-width: 640px) {
			.container {
				max-width: 640px;
			}
		}
		@media (min-width: 768px) {
			.container {
				max-width: 768px;
			}
		}
	}
`