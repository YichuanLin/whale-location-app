import React from "react";
import Note from "../../components/note";

const DESCRIPTION = "No whale selected";

export const SummaryInfoWrapper = ({ Component, id, ...rest }) => {
  if (!id) {
    return <Note type={Note.TYPE.INFO} description={DESCRIPTION} />;
  }

  return <Component id={id} {...rest} />;
};
