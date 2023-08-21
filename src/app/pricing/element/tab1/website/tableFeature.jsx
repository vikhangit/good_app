"use client"
import {
  Button,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { tableFuture } from "./tableData";

export default function TableFeature() {
  const [page, setPage] = React.useState(3);
  const [isLoading, setIsLoading] = React.useState(true);

  const hasMore = page < 3;
  const rows = tableFuture;

  return (
    <Table
      aria-label="Example table with dynamic content"
      className="mt-8"
      bottomContent={
        page > 3 ? (
          <div className="flex w-full justify-center">
            <button className="text-sm font-semibold flex items-center gap-x-2 hover:underline text-indigo-600" onClick={() => setPage(3)}>
              Ẩn bớt
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className="flex w-full justify-center">
            <button className="text-sm font-semibold flex items-center gap-x-2 hover:underline hover:text-indigo-600" onClick={() => setPage(tableFuture.length)}>
              Xem tất cả tính năng
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
        )
      }
    >
      <TableHeader>
        <TableColumn className="text-2xl font-semibold text-black">
          Features
        </TableColumn>
        <TableColumn className="text-sm font-semibold text-center">
          <p className="text-center"> Marketing Hub Professionals</p>
          <span className="font-light">$800/mo</span>
        </TableColumn>
        <TableColumn className="text-sm font-semibold text-center">
          <p>Marketing Hub Enterprise</p>
          <p className="font-light">$3,600/mo</p>
        </TableColumn>
      </TableHeader>
      <TableBody>
        {tableFuture.slice(0, page).map((item, index) => (
          <TableRow
            key={index}
            className={`border ${index === 0 && "border-t"} border-gray-600`}
          >
            <TableCell className="border-r border-gray-600 px-6 pr-2 text-xs font-bold w-1/5 py-6">
              <div dangerouslySetInnerHTML={{ __html: item.title }}></div>
            </TableCell>
            <TableCell className="border-r border-gray-600 text-xs font-light text-center w-2/5 py-6">
              <div
                className="flex justify-center"
                dangerouslySetInnerHTML={{ __html: item.professional }}
              ></div>
            </TableCell>
            <TableCell className="text-xs font-light text-center w-2/5 py-6">
              <div
                className="flex justify-center"
                dangerouslySetInnerHTML={{ __html: item.enterprise }}
              ></div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
