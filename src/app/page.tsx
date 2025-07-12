"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const Home = () => {
  const [formFields, setFormFields] = useState([{ name: "", option: "" }]);
  const [formErrors, setFormErrors] = useState([{ name: "", option: "" }]);
  const [submitted, setSubmitted] = useState(false);

  // Add field
  const handleAddField = () => {
    setFormFields([...formFields, { name: "", option: "" }]);
    setFormErrors([...formErrors, { name: "", option: "" }]);
  };

  // Delete field
  const handleDeleteField = (index: number) => {
    if (formFields.length === 1) return(alert("Only one field is left, cant delete !!"));
    const updatedFields = formFields.filter((_, i) => i !== index);
    const updatedErrors = formErrors.filter((_, i) => i !== index);
    setFormFields(updatedFields);
    setFormErrors(updatedErrors);
  };

  // Submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const validation = formFields.map((field) => ({
      name: field.name.trim() === "" ? "Name is required" : "",
      option: field.option === "" ? "Option is required" : "",
    }));
    setFormErrors(validation);

    const hasError = validation.some(
      (err) => err.name !== "" || err.option !== ""
    );
    if (!hasError) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <>


      <div className="min-h-screen flex flex-col items-center py-12 px-4 bg-background">
        <div className="items-start p-5 m-5 border border-border rounded-lg">
          <h2 className="text-lg font-semibold">I have also did every task by task</h2>
          <div className="gap-2 flex">
            <Link href="/task1">
              <Button variant="outline" className="mt-2">
                Task 1
              </Button>
            </Link>
            <Link href="/task2">
              <Button variant="outline" className="mt-2">
                Task 2
              </Button>
            </Link>
            <Link href="/task3">
              <Button variant="outline" className="mt-2">
                Task 3
              </Button>
            </Link>
            <Link href="/task4">
              <Button variant="outline" className="mt-2">
                Task 4
              </Button>
            </Link>
            <Link href="/task5">
              <Button variant="outline" className="mt-2">
                Task 5
              </Button>
            </Link>
            <Link href="/task6">
              <Button variant="outline" className="mt-2">
                Task 6
              </Button>
            </Link>
            <Link href="/task7">
              <Button variant="outline" className="mt-2">
                Task 7
              </Button>
            </Link>
            <Link href="/task8">
              <Button variant="outline" className="mt-2">
                Task 8
              </Button>
            </Link>
          </div>

        </div>


        <div className="w-full max-w-xl bg-card border border-border rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">User Information</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {formFields.map((field, index) => (
              <div key={index} className="flex gap-4 items-start">

                <div className="flex flex-col w-1/2">
                  <Input
                    type="text"
                    placeholder="Enter name"
                    value={field.name}
                    onChange={(e) => {
                      const updated = [...formFields];
                      updated[index].name = e.target.value;
                      setFormFields(updated);
                      if (submitted) {
                        const updatedErrors = [...formErrors];
                        updatedErrors[index].name = "";
                        setFormErrors(updatedErrors);
                      }
                    }}
                  />
                  <p className="text-sm mt-1 text-red-600 min-h-[20px]">
                    {submitted && formErrors[index]?.name ? formErrors[index].name : "\u00A0"}
                  </p>
                </div>

                <div className="flex flex-col">
                  <Select
                    value={field.option}
                    onValueChange={(value) => {
                      const updated = [...formFields];
                      updated[index].option = value;
                      setFormFields(updated);
                      if (submitted) {
                        const updatedErrors = [...formErrors];
                        updatedErrors[index].option = "";
                        setFormErrors(updatedErrors);
                      }
                    }}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm mt-1 text-red-600 min-h-[20px]">
                    {submitted && formErrors[index]?.option ? formErrors[index].option : "\u00A0"}
                  </p>
                </div>

                {/* Delete Button */}
                <div className="flex items-center h-full">
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => handleDeleteField(index)}
                    className="h-10"
                  >
                    Delete
                  </Button>
                </div>
              </div>

            ))}

            {/* Add Field  Button*/}
            <Button
              type="button"
              variant="success"
              onClick={handleAddField}
              className="mt-2"
            >
              + Add Field
            </Button>

            {/* Submit Button */}
            <Button type="submit" className="w-full mt-4">
              Submit
            </Button>
          </form>


        </div>
        {formFields.length > 0 && (
          <div className="w-full max-w-xl mt-8">
            <h2 className="text-center text-2xl font-semibold mb-4">Input Data</h2>
            <Table >
              <TableHeader>
                <TableRow className="">
                  <TableHead className="w-[50px]">#</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Option</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {formFields.map((field, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{field.name}</TableCell>
                    <TableCell>{field.option}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

      </div>
    </>
  );
};

export default Home;
