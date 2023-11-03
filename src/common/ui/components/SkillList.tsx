import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import SKILL_LIST, { Skills } from "../../../config/skills";

type Props = { skill: Skills } & React.HTMLProps<HTMLDivElement>;

const Skill: React.FC<Props> = ({ skill, ...rest }): React.ReactNode => {
  const { icon, title, content } = skill;
  return (
    <div>
      <img src={icon} width={120} />
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
};

const SkillList = (): React.ReactElement => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      {SKILL_LIST.map(
        (skill, index): React.ReactNode => (
          <Skill key={index} skill={skill} />
        )
      )}

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default SkillList;
