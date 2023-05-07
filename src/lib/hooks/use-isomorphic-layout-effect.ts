import React, { useEffect, useLayoutEffect } from "react";
import { isClient } from "../constants/env";

const useIsomorphicLayoutEffect = isClient ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
