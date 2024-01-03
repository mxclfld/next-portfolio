"use client";

import React from "react";
import { ProjectType } from "../lib/projects";
import Image from "next/image";
import Skill from "./Skill";
import Link from "next/link";
import { format } from "date-fns";
import { useCursor } from "@/context/CursorProvider";
import { FaCode } from "react-icons/fa";

interface ProjectProps {
  project: ProjectType;
  isCard?: boolean;
}

export default function Project({ project, isCard = false }: ProjectProps) {
  const {
    title,
    img,
    skills,
    description,
    repository,
    deploy,
    startDate,
    endDate,
  } = project;

  const { setToDefault, setToSkills, setToLink } = useCursor();

  const renderDate = (endDate: string, startDate: string | null) => {
    const end = format(new Date(endDate), "MMMM yyyy");
    return (
      <p className="text-primary">
        {startDate
          ? `${format(new Date(startDate), "MMMM yyyy")} - ${end}`
          : end}
      </p>
    );
  };

  return isCard ? (
    <div className="flex flex-col border border-primary p-4 w-full md:w-2/3 lg:w-96 bg-background justify-between min-h-full gap-5">
      <div className="flex flex-col gap-2">
        <p className="text-primary font-bold">{title}</p>
        {renderDate(endDate, startDate)}
        {img ? (
          <Image
            src={img}
            width={400}
            height={200}
            alt={`${title} img`}
            layout="responsive"
          />
        ) : null}
        <p className="text-primary">{description}</p>
        <div
          className="flex flex-row flex-wrap gap-y-1 gap-x-2"
          onMouseEnter={setToSkills}
          onMouseLeave={setToDefault}
        >
          {skills.map((_) => (
            <Skill key={`${title} ${_}`} name={_} />
          ))}
        </div>
      </div>
      <div className="flex flex-row">
        <Link
          className="flex flex-row justify-center bg-primary text-black px-4 py-1 flex-1"
          href={repository}
          onMouseEnter={setToLink}
          onMouseLeave={setToDefault}
          target="_blank"
        >
          <div className="flex flex-row gap-2 items-center">
            <FaCode /> Code
          </div>
        </Link>
        {deploy && (
          <Link
            className="text-center border border-primary px-4 py-1 flex-1"
            href={deploy}
            onMouseEnter={setToLink}
            onMouseLeave={setToDefault}
            target="_blank"
          >
            Website
          </Link>
        )}
      </div>
    </div>
  ) : null;
}
