'use client'

import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function SortableItem({ id, number }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "grab",
    touchAction: "none",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} key={'draganddrop'} 
    >
      {id === 1 ? (
        <div className="bg-secondary justify-between md:px-10 md:py-10 rounded-3xl relative md:h-[320px] md:w-570px flex flex-col  ">
          <p>[About Us]</p>
          <div className="border-b-2  border-blackk absolute w-full left-0 top-[100px]"></div>

          <div>
            At NIC Network and IT Consultants, we are a dynamic company with a
            passion for technology and innovation. Our goal is to empower
            businesses with cutting-edge solutions to enhance their online
            presence and streamline their IT infrastructure. With years of
            experience in the industry
          </div>
        </div>
      ) : null}
      {id === 2 ? (
        <div
        className="w-[120px]"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>Item {number}</span>
          <span style={{ cursor: "pointer" }}>⠿</span>
        </div>
      ) : null}

      {id === 3 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>Item {number}</span>
          <span style={{ cursor: "pointer" }}>⠿</span>
        </div>
      ) : null}
    </div>
  );
}

export default function SortableContainer() {
  const [items, setItems] = useState([
    { id: 1, number: 1 },
    { id: 2, number: 2 },
    { id: 3, number: 3 },
  ]);
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveId(null);

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "2rem auto", overflowX: "auto" }}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {/* Horizontal Flexbox Container */}
        <SortableContext items={items} strategy={horizontalListSortingStrategy}>
          <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
            {items.map((item) => (
              <SortableItem key={item.id} id={item.id} number={item.number} />
            ))}
          </div>
        </SortableContext>

        {/* Drag Overlay */}
        <DragOverlay>
          {activeId ? (
            <SortableItem
              id={activeId}
              number={items.find((item) => item.id === activeId)?.number}
            />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
