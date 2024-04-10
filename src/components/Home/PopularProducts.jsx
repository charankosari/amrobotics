import HomesAutoProductsContainer from './HomesAutoProductsContainer'
import DiyProductContainer from './DiyProductContainer'

function Popular(props) {
   const{products}=props;
   const home=products.filter((each)=>each.category==="Home")
  return (
    <div>
    <div className='flex flex-col items-center justify-center'>
      <h1 className='sm:text-5xl text-black font-bold py-2 text-2xl'>Popular categories</h1>
      <h3 className='sm:text-xl text-base text-gray-700'>Some of the most selling and handpicked</h3>
      <h3 className='sm:text-xl text-base text-gray-700'>Categories of products.</h3>
    </div>
    <br />
    <HomesAutoProductsContainer products={home}/>
    <br />
    <DiyProductContainer/>
    </div>
  )
}

export default Popular
