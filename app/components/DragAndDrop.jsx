'use client'

import React, { useState,useEffect } from "react";
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
import { Scale } from "lucide-react";

function SortableItem({ id, number, isDragging }) {

  
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

    const [maxWidth, setMaxWidth] = useState("auto");

useEffect(() => {
  if (typeof window !== "undefined") {
    setMaxWidth(
      isDragging
        ? "100%"
        : window.innerWidth < 768
        ? "100%"
        : id === 1
        ? "40%"
        : id === 2
        ? "25%"
        : id === 3
        ? "35%"
        : "auto"
    );
  }
}, [isDragging, id]); // Runs whenever `isDragging` or `id` changes

  // const maxWidth = isDragging
  //   ? "100%"
  //   : window.innerWidth < 768
  //   ? "100%"
  //   : id === 1
  //   ? "40%"
  //   : id === 2
  //   ? "25%"
  //   : id === 3
  //   ? "35%"
  //   : "auto";

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "grab",
    maxWidth,
     
    width: maxWidth,
    touchAction: "none",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="overflow-hidden  hover:scale-95 transition-all "
    >
      {id === 1 ? (
        <div className="bg-secondary justify-between  px-10  py-10 rounded-3xl relative h-[320px] min-w-full   flex flex-col  ">
          <p>[About Us]</p>
          <div className="border-b-[1px] opacity-15  border-blackk absolute w-full left-0 top-[100px]  "></div>

          <p className="font-Secondary  text-[14px] leading-[22px]">
            At NIC Network and IT Consultants, we are a dynamic company with a
            passion for technology and innovation. Our goal is to empower
            businesses with cutting-edge solutions to enhance their online
            presence and streamline their IT infrastructure. With years of
            experience in the industry
          </p>
        </div>
      ) : null}
      {id === 2 ? (
        <div
          className="h-[320px]  bg-whitee rounded-3xl flex flex-col justify-between py-10 px-10 "
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="flex w-full flex-row  ">
            <p className="font-[16px] text-blackk">[Our Services]</p>
            <img
              src="/Assets/Images/DragAndDrop/arrow.png"
              className="ml-auto"
              alt=""
            />
          </div>
          <p className="font-Main text-2xl text-start mx-auto font-extrabold">
            EVO TEAM (Marketing Department)
          </p>
          {/* <span style={{ cursor: "pointer" }}>⠿</span> */}
        </div>
      ) : null}

      {id === 3 ? (
        <div
          className=" h-[320px] bg-whitee rounded-3xl "
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className="mx-auto my-auto">Video here</p>
          {/* <span style={{ cursor: "pointer" }}>⠿</span> */}
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
    <div
      style={{ maxWidth: "100%", overflowX: "auto" }}
      className="md:mx-7 p-3 md:p-0"
    >
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {/* Horizontal Flexbox Container */}
        <SortableContext items={items} strategy={horizontalListSortingStrategy}>
          <div
            style={{ display: "flex", gap: "10px", marginTop: "15px"}}
            className="flex flex-col md:flex-row overflow-hidden"
          >
            {items.map((item) => (
              <SortableItem
                key={item.id}
                id={item.id}
                number={item.number}
                isDragging={false}
              />
            ))}
          </div>
        </SortableContext>

        {/* Drag Overlay */}
        <DragOverlay>
          {activeId ? (
            <SortableItem
              id={activeId}
              isDragging={true}
              number={items.find((item) => item.id === activeId)?.number}
            />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
