import { Accordion, AccordionContent, AccordionTrigger } from '.'

const Preview = () => {
  return (
    <Accordion className="space-y-3">
      <div>
        <AccordionTrigger id="test1">Accordion 1</AccordionTrigger>
        <AccordionContent id="test1">Content 1</AccordionContent>
      </div>
      <div>
        <AccordionTrigger id="test2">Accordion 2</AccordionTrigger>
        <AccordionContent id="test2">Content 2</AccordionContent>
      </div>
    </Accordion>
  )
}

export { Preview }
