import { ReactNode } from "react";
import '@material/chips/dist/mdc.chips.css';

interface FilterChipsProps {
  children: ReactNode
}

interface ChipProps {
  id?: any;
  text: string;
  selected?: boolean;
  onSelect?: () => void;
}

export function FilterChips({children}: FilterChipsProps) {
  return (
    <div className="mdc-chip-set mdc-chip-set--filter" role="grid">
      {children}
    </div>
  );
}

export function Chip({
  id,
  text,
  selected,
  onSelect
}: ChipProps) {

  function isSelected(e: any) {
    const isClick = e.type === 'click';
    const isEnter = e.type === 'Enter' || e.keyCode === 13;
    const isSpacebar = e.type === 'Spacebar' || e.keyCode === 32;
    return isClick || isEnter || isSpacebar;
  }

  function handleSelect(e: any) {
    if (onSelect && isSelected(e)) {
      onSelect();
    }
  }

  return (
    <div
      id={id}
      className={`mdc-chip ${selected ? "mdc-chip--selected" : ""}`}
      role="row"
      onClick={handleSelect}
      onKeyDown={handleSelect}
    >
      <div className="mdc-chip__ripple" />
      <span className="mdc-chip__checkmark">
        <svg className="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
          <path
            className="mdc-chip__checkmark-path"
            fill="none"
            stroke="black"
            d="M1.73,12.91 8.1,19.28 22.79,4.59"
          />
        </svg>
      </span>

      <span role="gridcell">
        <span role="checkbox" tabIndex={0} aria-checked="false" className="mdc-chip__primary-action">
          <span className="mdc-chip__text">{text}</span>
        </span>
      </span>
    </div>
  );
}