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
                    <div key={index} className=' gap-2 flex flex-col bg-[#ceced2] rounded-md p-2 w-auto mb-2 'id='thediv'>
                        <h1 className='text-3xl' id='remove'>{item.question}</h1>
                        <p className='text-xl' id='remove1'>{item.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faq;
