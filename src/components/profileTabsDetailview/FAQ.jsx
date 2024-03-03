import React from 'react';
import './Faq.css';

function Faq() {
    const object = [
        {
          "question": "What is the waiting period for getting the product.?",
          "answer": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolores esse officiis nisi quos eum debitis ad magnam dignissimos expedita quod, sint, cupiditate nesciunt voluptates!"
        },
        {
          "question": "Another question?",
          "answer": "Another answer."
        },
        {
          "question": "Yet another question?",
          "answer": "Yet another answer."
        }
    ];
      
    return (
        <div className='px-10 py-5 flex flex-col h-full' id='mrdiv'>
            <h1 className='text-black font-black text-2xl'>FAQ'S</h1>
            <div >
                {object.map((item, index) => (
                    <div className="collapse collapse-plus " key={index}>
                    <input type="radio" name="my-accordion-3" defaultChecked /> 
                    <div className="collapse-title text-xl font-medium">
                    {item.question}
                    </div>
                    <div className="collapse-content"> 
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
            </div>


           





        </div>
    );
}

export default Faq;
