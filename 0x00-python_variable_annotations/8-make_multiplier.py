#!/usr/bin/env python3
"""
make multipier
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    multiplie
    """
    def multiplies(n: float):
        """
        multiply two number
        """
        return n * multiplier
    return multiplies
