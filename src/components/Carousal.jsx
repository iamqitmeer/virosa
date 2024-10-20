import React, { useState } from "react";

function Carousel() {
  const images = [
    "https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?q=80&w=1282&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1485736231968-0c8ad5c9e174?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="h-[450px] mb-8 w-full flex items-center justify-center">
<img className="w-full h-full object-cover" src="https://static.nike.com/a/images/f_auto/dpr_1.1,cs_srgb/h_1550,c_limit/b4932339-9ee1-445d-b2df-f68d69036ccc/nike-just-do-it.jpg" alt="" />
    </div>
  );
}

export default Carousel;
