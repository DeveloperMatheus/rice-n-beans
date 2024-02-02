"use client";

import {
  Checkbox,
  DatePicker,
  Input,
  Label,
  Radio,
  Range,
  Select,
  Switch,
} from "~/components/Form";

import {
  Badge,
  Button,
  Card,
  Modal,
  ModalContent,
  ModalFooter,
  Table,
  TableBody,
  TableData,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/Layout";

import { Title } from "~/components/Typography";
import { ThemeDropdown } from "~/components/Theme/ThemeDropdown";
import { FormEvent, useRef, useState } from "react";

export default function Home() {
  const [testModal, setTestModal] = useState(false);

  const testRef = useRef<HTMLInputElement>(null);

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault();

    console.log(testRef.current?.value);

    if (!testRef.current?.value) return;

    const testDate = new Date(testRef.current.value);
    console.log("🚀 ~ handleSubmit ~ testDate:", testDate);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Title>Page title</Title>

      <Button>fsafsafasfasfas</Button>

      <div>
        <h2>Theme changer: </h2>
        <ThemeDropdown />
      </div>

      <div>
        <h2>Input: </h2>
        <Input />
      </div>

      <div>
        <h2>Modal: </h2>
        <Button size="lg" onClick={() => setTestModal(true)}>
          Open Modal
        </Button>

        <Modal isOpen={testModal} onCloseModal={() => setTestModal(false)}>
          <ModalContent>test</ModalContent>
          <ModalFooter>
            <Button size="sm" onClick={() => setTestModal(false)}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>

      <div className="w-full">
        <h2>Select:</h2>
        <div className="flex flex-row items-center justify-center">
          <Select>
            <option defaultChecked hidden></option>
            <option>Test1</option>
            <option>Test2</option>
            <option>Test3</option>
            <option>Test4</option>
          </Select>
        </div>
      </div>

      <div>
        <h2>Checkbox:</h2>
        <div className="flex flex-row items-center justify-center">
          <Checkbox id="oi" />
          <Label htmlFor="oi" className="ml-2">
            Test
          </Label>
        </div>
      </div>

      <div>
        <h2>Radio:</h2>
        <div className="flex flex-row items-center justify-center space-x-2">
          <Radio name="test" />
          <Radio name="test" />
          <Radio name="test" />
        </div>
      </div>

      <div>
        <h2>Card:</h2>
        <div>
          <Card>
            <p>test</p>
          </Card>
          <Card>
            <p>test</p>
          </Card>
        </div>
      </div>

      <div className="space-x-4">
        <h2>Switch:</h2>
        <Switch aria-label="Teste" disabled />
        <Switch />
        <Switch />
        <Switch />
      </div>

      <div className="space-x-4">
        <h2>Range:</h2>
        <Range />
      </div>

      <div className="space-x-4">
        <h2>Badge:</h2>
        <Badge>Test</Badge>
      </div>

      <div className="space-x-4">
        <h2>Table:</h2>
        <Card className="p-0 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Test</TableHead>
                <TableHead>Test</TableHead>
                <TableHead>Test</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableData>TestData</TableData>
                <TableData>TestData</TableData>
                <TableData>TestData</TableData>
              </TableRow>
              <TableRow>
                <TableData>TestData</TableData>
                <TableData>TestData</TableData>
                <TableData>TestData</TableData>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableData>TestData</TableData>
                <TableData>TestData</TableData>
                <TableData>TestData</TableData>
              </TableRow>
            </TableFooter>
          </Table>
        </Card>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <h2>Date:</h2>
          <div className="flex flex-row items-center justify-center space-x-2">
            <DatePicker ref={testRef} />
          </div>
        </div>

        <Button>Enviar</Button>
      </form>
    </main>
  );
}
