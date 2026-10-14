import { Plus } from 'lucide-react'
import type { FAQItem } from '../../data/faq'
import './AccordionItem.css'

type AccordionItemProps = {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <article
      className={`accordion-item ${
        isOpen ? 'accordion-item--open' : ''
      }`}
    >
      <button
        className="accordion-item__trigger"
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>

        <Plus
          className="accordion-item__icon"
          size={24}
          strokeWidth={1.4}
          aria-hidden="true"
        />
      </button>

      <div className="accordion-item__content">
        <div className="accordion-item__content-inner">
          <p>{item.answer}</p>
        </div>
      </div>
    </article>
  )
}

export default AccordionItem