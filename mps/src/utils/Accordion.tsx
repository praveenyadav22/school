"use client";

import React, { useState } from "react";

// ─────────────────────────────────────────────────────────────
// ACCORDION ITEM — reusable controlled accordion panel
// Usage:
//   const [openId, setOpenId] = useState<string | null>(null);
//   <AccordionItem id="panel1" label="Title" openId={openId} setOpenId={setOpenId}>
//     ...content
//   </AccordionItem>
// ─────────────────────────────────────────────────────────────
interface AccordionItemProps {
  id:        string;
  label:     string;
  openId:    string | null;
  setOpenId: (id: string | null) => void;
  children:  React.ReactNode;
}

export const AccordionItem = ({
  id,
  label,
  openId,
  setOpenId,
  children,
}: AccordionItemProps) => {
  const isOpen = openId === id;

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          type="button"
          className={`accordion-button border-bottom fw-semibold${isOpen ? "" : " collapsed"}`}
          onClick={() => setOpenId(isOpen ? null : id)}
          aria-expanded={isOpen}
          aria-controls={id}
        >
          {label}
        </button>
      </h2>
      <div
        id={id}
        className={`accordion-collapse collapse${isOpen ? " show" : ""}`}
      >
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// ACCORDION — wrapper that manages open state internally
// Usage (self-contained, no external state needed):
//   <Accordion defaultOpen="panel1">
//     <AccordionItem id="panel1" label="Title" ...> ... </AccordionItem>
//   </Accordion>
// ─────────────────────────────────────────────────────────────
interface AccordionProps {
  id?:         string;
  defaultOpen?: string | null;
  children:    React.ReactNode;
}

export const Accordion = ({ id = "accordion", defaultOpen = null, children }: AccordionProps) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpen);

  // Clone children and inject openId/setOpenId props
  const items = React.Children.toArray(children) as React.ReactElement[];
  const cloned = items.map((child) => {
    if (!React.isValidElement(child)) return null;
    return React.cloneElement(child, { openId, setOpenId } as Record<string, unknown>);
  });

  return (
    <div className="accordion accordion-flush" id={id}>
      {cloned}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// BATCH TABLE — reusable headerBg table for lists/results
// Usage:
//   <BatchTable
//     heading="Engineering Colleges"
//     colSpan={5}
//     headers={["S.No.", "Name", "Class", "College", "Course"]}
//     rows={[["1", "Name", "XII A", "IIT Delhi", "Engineering"]]}
//   />
// ─────────────────────────────────────────────────────────────
interface BatchTableProps {
  heading:  string;
  colSpan:  number;
  headers:  string[];
  rows:     (string | null)[][];
}

export const BatchTable = ({ heading, colSpan, headers, rows }: BatchTableProps) => (
  <div className="contentsection with_table">
    <div className="table-responsive">
      <table className="table headerBg">
        <thead>
          <tr><th colSpan={colSpan}>{heading}</th></tr>
        </thead>
        <tbody>
          <tr>
            {headers.map((h) => (
              <td key={h}><strong>{h}</strong></td>
            ))}
          </tr>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell ?? "\u00a0"}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────
// PDF EMBED — reusable PDF iframe for document pages
// Usage:
//   <PdfEmbed src="/documents/my-file.pdf" height={800} />
// ─────────────────────────────────────────────────────────────
interface PdfEmbedProps {
  src:     string;
  height?: number;
  title?:  string;
}

export const PdfEmbed = ({ src, height = 600, title = "Document" }: PdfEmbedProps) => (
  <p>
    <iframe
      src={src}
      width="100%"
      height={height}
      frameBorder={0}
      className="frame"
      title={title}
    />
  </p>
);

// ─────────────────────────────────────────────────────────────
// ACCORDION CONTROLLER — hook for managing accordion state
// Use when you need to control AccordionItems manually
// Usage:
//   const { openId, setOpenId } = useAccordion("panel1"); // optional default
// ─────────────────────────────────────────────────────────────
export const useAccordion = (defaultOpen: string | null = null) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpen);
  return { openId, setOpenId };
};
