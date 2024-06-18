import React, { useCallback } from "react";

export function useEffectOnce(effect: React.EffectCallback, dependencies: React.DependencyList = []) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return React.useEffect(useCallback(effect, dependencies), dependencies)
  }