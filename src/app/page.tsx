"use client";

import { Badge, Button, Card } from "~/components/Layout";

import {
  Checkbox,
  DatePicker,
  ErrorMessage,
  Input,
  Label,
  Radio,
  Range,
  Select,
  Switch,
} from "~/components/Form";

import { Text } from "~/components/Typography";

import {
  Table,
  TableBody,
  TableData,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/Table";

import { Modal, ModalContent, ModalFooter } from "~/components/Modal";

import { ThemeDropdown } from "~/components/Theme/ThemeDropdown";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { testDateFormSchema } from "./schema";
import { z } from "zod";
import { TabPanel, Tab, Tabs, TabList } from "~/components/Tabs";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "~/components/Accordion";
import Link from "next/link";

export default function Home() {
  const [testModal, setTestModal] = useState(false);

  const testRef = useRef<HTMLInputElement>(null);

  function handleTestSubmit(evt: z.infer<typeof testDateFormSchema>) {
    console.log("🚀 ~ handleTestSubmit ~ evt:", evt.testDate);
  }

  const {
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof testDateFormSchema>>({
    resolver: zodResolver(testDateFormSchema),
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Text tag="h1">Page title</Text>

      <Link href="/base-test">Go to base test</Link>
      <Button className="rounded-none">fsafsafasfasfas</Button>

      <div className="relative bg-blue-800">
        <div className="sticky top-0 bg-red-800">
          <Button className="rounded-none">sticky?</Button>
        </div>
      </div>
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
      <div className="container">
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

      <div className="w-full flex flex-col items-center justify-center my-5">
        <h2>Tabs:</h2>
        <Tabs className="w-full lg:w-96" defaultValue="test1">
          <TabList>
            <Tab className="min-w-20" id="test1">
              Test1
            </Tab>
            <Tab disabled className="min-w-20" id="test2">
              Test2
            </Tab>
            <Tab className="min-w-20" id="test5">
              Test3
            </Tab>
            <Tab className="min-w-20" id="test6">
              Test4
            </Tab>
            <Tab className="min-w-20" id="test7">
              Test5
            </Tab>
            <Tab className="min-w-20" id="test8">
              Test6
            </Tab>
            <Tab className="min-w-20" id="test9">
              Test7
            </Tab>
          </TabList>

          <TabPanel id="test1">Test Panel 1</TabPanel>
          <TabPanel id="test2">
            <p>Lazy loaded image</p>
            <Image
              width={200}
              height={200}
              src="/rice-and-beans.webp"
              alt="Rice and beans on a plate"
            />
          </TabPanel>
          <TabPanel id="test5">Test Panel 4</TabPanel>
          <TabPanel id="test6">Test Panel 5</TabPanel>
          <TabPanel id="test7">Test Panel 6</TabPanel>
          <TabPanel id="test8">Test Panel 7</TabPanel>
          <TabPanel id="test9">Test Panel 8</TabPanel>
        </Tabs>
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

      <div className="space-x-4 space-y-4">
        <h2>Accordion:</h2>
        <Accordion>
          <AccordionTrigger>Test</AccordionTrigger>
          <AccordionContent>Test Content</AccordionContent>
        </Accordion>

        <Accordion>
          <AccordionTrigger>Test2</AccordionTrigger>
          <AccordionContent>Test Content2</AccordionContent>
        </Accordion>
      </div>

      <form
        className="border rounded-lg p-3 mt-5"
        onSubmit={handleSubmit(handleTestSubmit)}
      >
        <h2>Form: </h2>
        <div>
          <h3>Date:</h3>
          <Controller
            control={control}
            name="testDate"
            render={({ field: { onChange } }) => {
              return <DatePicker min="1900-01-01" onChange={onChange} />;
            }}
          />
          {errors.testDate && <ErrorMessage>Date is required</ErrorMessage>}
        </div>

        <Button className="mt-5">Enviar</Button>
      </form>

      <div>
        <Text className="text-red-600 dark:text-purple-400">
          Me cagué todito
        </Text>
      </div>
    </main>
  );
}
