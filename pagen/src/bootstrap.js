"use strict";

import React from "react";
import { render } from "react-dom";

import App from "./app";

const viewportEl = document.getElementById("viewport");

render(<App />, viewportEl);
