import React from 'react';
import {useState} from 'react'
import Icon1 from '../../images/5.jpg';
import Icon2 from '../../images/6.jpg';
import Icon3 from '../../images/7.jpg';
import Icon4 from '../../images/8.jpg';
import Icon5 from '../../images/9.jpg';
import Icon6 from '../../images/10.jpg';
import Icon7 from '../../images/11.jpg';
import Icon8 from '../../images/12.jpg';
import Icon9 from '../../images/13.jpg';
import Icon10 from '../../images/14.jpg';
import Icon11 from '../../images/15.jpg';
import Icon12 from '../../images/16.jpg';
import Icon13 from '../../images/17.jpg';
import Icon14 from '../../images/18.jpg';
import Icon15 from '../../images/19.jpg';
import Icon16 from '../../images/20.jpg';
import Icon17 from '../../images/21.jpg';
import Icon18 from '../../images/22.jpg';
import Icon19 from '../../images/23.jpg';
import Icon20 from '../../images/24.jpg';
import Icon21 from '../../images/25.jpg';
import Icon22 from '../../images/26.jpg';
import Icon23 from '../../images/27.jpg';
import Icon24 from '../../images/28.jpg';
import Icon25 from '../../images/29.jpg';
import Icon26 from '../../images/30.jpg';
import Icon27 from '../../images/31.jpg';
import Icon28 from '../../images/32.jpg';
import Icon29 from '../../images/33.jpg';
import Icon30 from '../../images/34.jpg';
import Icon31 from '../../images/35.jpg';
import Icon32 from '../../images/36.jpg';


const products = [
  {
    id : 0,
    title : 'Bookcase',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon1,
  },
  {
    id : 1,
    title : 'Mini Bookcase',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon2,
  },
  {
    id : 2,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon3,
  },
  {
    id : 3,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon4,
  },
  {
    id : 4,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon5,
  },
  {
    id : 5,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon6,
  },
  {
    id : 6,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon7,
  },
  {
    id : 5,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon8,
  },
  {
    id : 5,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon9,
  },
  {
    id : 5,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon10,
  },
  {
    id : 5,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon11,
  },
  {
    id : 5,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon12,
  },
  {
    id : 5,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon13,
  },
  {
    id : 5,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon14,
  },
  {
    id : 5,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon15,
  },
  {
    id : 5,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon16,
  },
  {
    id : 5,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon17,
  },
  {
    id : 5,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon18,
  },
  {
    id : 5,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon19,
  },
  {
    id : 5,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon20,
  },
  {
    id : 5,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon21,
  },
  {
    id : 5,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon22,
  },
  {
    id : 5,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon23,
  },
  {
    id : 5,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon24,
  },
  {
    id : 5,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon25,
  },
  {
    id : 5,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon26,
  },
  {
    id : 5,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon27,
  },
  {
    id : 5,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon28,
  },
  {
    id : 5,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon29,
  },
  {
    id : 5,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon30,
  },
  {
    id : 5,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon31,
  },
  {
    id : 5,
    title : 'Desk',
    desc : 'We help reduce your fees and increase your overall revenue.',
    img: Icon32,
  },
]

const Categories = () => {
  const [isBtnOpen, setIsBtnOpen] = useState(false)


  return (
    <div className={`bg-[#101522] py-8 relative  overflow-hidden`} id='categories'>
      <div className="container mx-auto max-sm:p-4 ">
        <h2 className='text-center mb-8 text-white text-4xl font-bold'>Our Categories</h2>
        
        <div 
        className={`flex justify-center flex-wrap  ${isBtnOpen ? 'h-full' : 'h-96'}
        gap-8 gap-x-10`}>

        {
          products.map(product => 
          (<div 
            key={product.id}
            className="text-white h-min
            lg:w-1/5 md:w-1/3 max-sm:w-full aspect-square relative
            bg-white hover:scale-110 max-sm:hover:scale-105
            transition-transform rounded-md overflow-hidden">
              <img src={product.img} alt="" className='absolute' />
              <div 
                className={`flex flex-col justify-center items-center text-center absolute
                h-full w-full 
                bg-gradient-to-r from-zinc-900/50 to-zinc-900/50
                hover:opacity-0 transition-opacity`}> 
  
                <h3 className="z-10 text-3xl font-bold">{product.title}</h3>
                <p className="z-10">{product.desc}</p>
              </div>
            </div>))
          }
          

          <div className={`text-center absolute bottom-0 w-full h-16 flex justify-center items-end ${isBtnOpen ? 'bg-none' : 'bg-white-shadow'}`}>
            <button className={`
              text-center font-bold text-4xl text-white 
              rotate-0 rounded-full ${isBtnOpen ? 'hidden ' : 'inline-block '}
              w-14 h-14 p-2 bg-[#101522]`}
              onClick={() => setIsBtnOpen(true)}
              >
                V
            </button>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default Categories;


    // <CategoriesContainer id="categories">
    //     <CategoriesH1>Our Categories</CategoriesH1>
    //     <CategoriesWrapper>

    //     <CategoriesCard>
    //         <CategoriesIcon src={Icon1} />
    //         <CategoriesH2></CategoriesH2>
    //         <CategoriesP></CategoriesP> 
    //     </CategoriesCard>
    //     <CategoriesCard>
    //         <CategoriesIcon src={Icon2} />
    //         <CategoriesH2>Desks</CategoriesH2>
    //         <CategoriesP>We help reduce your fees and increase your overall revenue.</CategoriesP> 
    //     </CategoriesCard>
    //     <CategoriesCard>
    //         <CategoriesIcon src={Icon3} />
    //         <CategoriesH2>Bookcases</CategoriesH2>
    //         <CategoriesP>We help reduce your fees and increase your overall revenue.</CategoriesP> 
    //     </CategoriesCard>
        
    //     </CategoriesWrapper>
    // </CategoriesContainer>