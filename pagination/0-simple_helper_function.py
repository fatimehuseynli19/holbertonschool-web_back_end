#!/usr/bin/env python3
"""
Simple helper function
"""


def index_range(page: int, page_size: int) -> tuple:
    """Return start and end index for pagination"""
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
