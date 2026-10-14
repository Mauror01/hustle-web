import { useState } from 'react'
import { faqItems } from '../../data/faq'
import AccordionItem from '../ui/AccordionItem'
import './FAQ.css'

function FAQ() {
  const [openIndex, setOpenIndex] =
    useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index,
    )
  }

  return (
    <section
      className="faq section"
      id="faq"
    >
      <div className="container faq__layout">
        <div className="faq__heading">
          <span className="mono faq__eyebrow">
            Preguntas frecuentes
          </span>

          <h2 className="section-title">
            Algunas cosas
            <br />
            que quizás quieras
            <br />
            saber.
          </h2>
        </div>

        <div className="faq__items">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ