import React from "react";
import { UserStatus } from "./user.model";
import { FilterChangeListener, FilterType } from "./TodoApp";
import './TodoFilter.css'

interface TodoFilterProps {
    filter: FilterType;
    onFilterChange: FilterChangeListener;
}

export default function TodoFilter({filter, onFilterChange}: TodoFilterProps) {
    function handleFilterChange(event: React.ChangeEvent<HTMLSelectElement>) {
        onFilterChange(event.target.value === '0' ? undefined: parseInt(event.target.value))
    }

    return (
        <select value={filter} onChange={handleFilterChange} className="TodoFilter">
            <option value='0'>ALL</option>
            <option value={UserStatus.ACTIVE}>Active</option>
            <option value={UserStatus.SUSPENDED}>Suspended</option>
            <option value={UserStatus.DEACTIVATED}>Deactivated</option>
        </select>
    );
}