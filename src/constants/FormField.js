export const formFields = [
  {
    id: "name",
    label: "Name *",
    type: "text",
    required: true,
    colSpan: 1,
  },
  {
    id: "email",
    label: "Email Address *",
    type: "email",
    required: true,
    colSpan: 1,
  },
  {
    id: "phone",
    label: "Phone Number",
    type: "tel",
    required: false,
    colSpan: 1,
    pattern: "^\\+?[0-9]*$",
    inputMode: "tel",
  },
  {
    id: "title",
    label: "Exhibition Title *",
    type: "text",
    required: true,
    colSpan: 1,
  },
  {
    id: "dates",
    label: "Proposed Dates *",
    type: "date",
    required: true,
    colSpan: 1,
  },
];

export const textAreaField = {
  id: "medium",
  label: "What do you want to display? *",
  required: true,
  rows: 5,
};

export const fileField = {
  id: "cv",
  label: "Upload Your CV *",
};
