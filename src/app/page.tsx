"use client";

import {
  Checkbox,
  Input,
  Label,
  Radio,
  Range,
  Select,
  Switch,
} from "~/components/Form";
import { Button, Card, Modal } from "~/components/Layout";
import { Title } from "~/components/Typography";
import { ThemeDropdown } from "~/components/Theme/ThemeDropdown";
import { useState } from "react";

export default function Home() {
  const [testModal, setTestModal] = useState(false);
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
        <Button onClick={() => setTestModal(true)}>Open Modal</Button>
        <Modal
          className="rounded-lg w-full max-w-[40rem]"
          isOpen={testModal}
          onCloseModal={() => setTestModal(false)}
        >
          Test
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
    </main>
  );
}
