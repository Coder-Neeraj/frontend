import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { deepPurple } from "@mui/material/colors";  
import { navigation } from "./NavigationData";
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [open, setOpen] = useState(false); 
  const navigate =useNavigate();
 
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);
  const jwt = localStorage.getItem("jwt");

 
  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = (event) => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setOpenAuthModal(true);
  };
  const handleClose = () => {
    setOpenAuthModal(false);
   
  };

  const handleCategoryClick = (category, section, item, close) => {
    navigate(`/${category.id}/${section.id}/${item.id}`);
    close();
  };

  



  return (
    <div className="bg-white pb-10">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium border-none"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <p className="-m-2 block p-2 text-gray-500">
                                    {"item.name"}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="/"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="/" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                      CAD
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over 1999 INR
        </p>

        <nav aria-label="Top" className="mx-auto">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center px-11">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
               
                  <span className="sr-only">Your Company</span>
                  <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIWFRQXGBUVGBcWFRcdGRYZHRcXGhsnJRsiHSkgGxolIR8fITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGysjICY2MCs0Mi03LisyNzYtNzctMC0vKyswLzE3LSs2MiswNS01LTctNzArLystMysrLS03Lf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQYFBwMECAL/xABIEAABAgMEBggEAgcGBgMBAAABAAIDESEEEjFBBSIyUWGhBgcTQmJxgcGRsbLxFOEIFSNScrPwM1OSotHSJCVUY3OCNEODF//EABoBAQACAwEAAAAAAAAAAAAAAAAEBQIDBgH/xAAtEQACAQMDAQcEAgMAAAAAAAAAAQIDESEEBRIxQVFhcYGRwRMiodEU8bHh8P/aAAwDAQACEQMRAD8A3SBcqazQCWtv90AltV5oBKp2ch8qIBLv8uSEXtbd91Es+7u/JCJ1bQZ5ICTr4UkhN7V3fZDXYpvyQ1o2hzyQCfc580nLV3+6cO9v/NMKHayPyqgANzGs0AuY1mgpt15oBLarzQACWtv90l3+XJQBKp2ch8qKZZ93d+SAEXtbd90OvhSSgidW0GeSk12Kb8kAJvau77JPuc+aGtG0OeScO9v/ADQCctXf7oDcxrNMKHayPyqgpt15oABcxrNAJa2/3QCW1XmoAlU7OQ+VEBMu/wAuSEXtbd91Es+7u/JCJ1bQZ5ICTr4UkhN7V3fZDXYpvyQ1o2hzyQCfc580nLV3+6cO9v8AzTgdrf8AKqAA3MazQC5jWaCm3XmgEtqvNAT+J4InaM3ckQEDx+igcdnL2Ug3tqigGeqcN/kgJ+hQfDhmk+7lvUk3aCoKAHwevsh8OOaHV2azQi7UVJQD6089rL2SXez3JKescRl5IAPH6IPH6IBe2qI03tqiAgcdnL2U/SgM9U4b/JJ93LegB8OGaHwevsoJu0FQUebmBx3oCT4cc0+tQCBrNMz8VMu9nuQDz2svZB4/RJT1jiMvJAL21RAB4/RQOOzl7KQb21RQDPVOG/yQD6EPhwzSfdy3qSbtBUFAD4PX2Q+HHNDq7NZoRdqKkoB9aee1l7JLvZ7klPWOIy8kAHj9EHj9EAvbVEab21RATJn9EonYN38wiAid+mEknPU3Z+SE3tmiTnqjEZ+SAT7nPngk7urjP7JPu570Bu0NSUA2OM/TBJXdbGf3Qau1WaAXamoKAS7/AC5YpKevuy8lEu9luQiesMN3kgJlfrhL1Sd+mEkIvbNEJvbNEAnPU3Z+S+XxA0FpIAGLiZADFfU56oxGfkqV1h6WLQ2ytMi4X4hGbZ6o8ian+Eb1pr1lRpubJOk00tRVVOPacWmOmLiTDsxus/vCNZ3kDgOJr5LpWfQ9qjSe5jzPB0R0p/4jNZfoVoFrWNtEVs3uE4YODW5HzOI3CSuA1dqs1Ww0c9UudeTz0SLOvrKWlf0tPFYw2/8Av9FEOgrTC1rh82OBPIzXf0Vp17CBEm8cdoZY5+qtYF2pqCsXprRQiNMRoAcK/wAQ3HisKu3VNOvqaaTuux9pHWtjX+2tFeZk4bg8CIDTEcZL6lf4S9VXej1qIdcJ1TUeYqfiPkrERe2aKw0WqWppKa69H5kGvSdKfETv8JeqTnqbs/JCb2zRJz1RiM/JSzSJ9znzwSd3Vxn9kn3c96A3aGpKAbHGfskrutjP7oNXarNALtTUFAJd/lyxSU9fdl5KJd7LchE9YYbvJATK/wAJeqTv8JeqEXtmiE3tmiAfhuPJFHYO38yiAk+D1Ty2s/dDTZrzTCo2sx86IB9aDxY5Jx7278kFauocskAHj9PdQPFhkpFdum7JQDOjqDLJAT9KHhs5+6A5d3f+aE5DZzPzqgB8HqujpTTECBK/EDCcpOJI/hAJl6LvEy2a81p/TtoMS0xnEz13AfwtJDeQUPW6p0IJpXbLHbdCtVNqTsl3GxR0tsZlKMb1P/qi/wCxVbpFoC1R7ZEeIc2OLAHdpCo0NaDQvnvOCrLVysaNypqu4OrHjUj44x/m5f0NuWlnzoyy1b7lf2txNnu6QWRhMN0STmEtl2cQylSUw2VFEPpNZTtRZ7v2cT/atcMXYhMJMgCTuAmV694rXxGP5/ZDez0F1lL8fo2AzpHZp1izH/jif7V9N6QWef8Aaau65E/2qgtXM1YPeq/dH8/s1vaqK7Zfj9Fs/V7xGL2t1A+8DebhOZpOayMfTEFri0PkRQ6r8fgqOxo3LnYo9LcXp+X0Y9XfLv7WUTCpolO3OXTux+y8wLXDif2LpnMVBl5Fc/ltZ+6pmjopbEY4fvD4EyKueFRtZj50V9tuteqg3JWa7ir1VBUpWXQee2g8WOSDedrd+SkVq6hViRiB4/T3UDxYZKRXbpuyUAzo6gyyQD6EPDZz90nl3d/5oTKg2cz86oCT4PVD4PVCZbNeaGmxXmgIk/j8Qido/dyRASRcrjNJS19/ugFyuM0Alrb/AHQCXf5ckAva277pLv8ALkhF7W3fdABr40l7oDe1dyHX4S90Jvau77IBPuc+aEy1d/uk+5z5pOWpv90BER/Zg7pE/BaQa4mpxNT5lbh09F7KzRzn2b5ed0gLT7FSbvLMV5nTbBG0KkvJe39nK1c7FwNXOxUjLyRysVh6GQr1pHBrzyl7rAQGXiGjEkD4mSvHRvo/EhRHPe5h1S3VJzIOYG5StBRnOtGSWE1cqtxrQhSlFvLTsVi1slFiDc94+DiFDVm9L6BiXo0YOZd1nymZyx3SmsI1RdVRnSm1JWPKVaNSCcXc5mLmauFi5mBQ2eSOZivLaAP31+KpLDJW7Rh/ZMf4QPZXuxStOce9J+39lRuCukzsy7/LkgF7W3fdJd/lyQi9rbvuulKsDX4S90Bvau77IdfhL3Qm9q7vsgE+5z5oTLV3+6T7nPmk5am/3QBxucZoRc4zQG5xmjRc4zQEfiTuCL6/E8EQEAS2q81AEqnZyHyopHj9EHHZy9kBEs+7u/JSROraBPpQ+HDNADXYpvyQ1o2hzyQ+D19kPhxzQDh3t/5phQ7WR+VU+tPPay9kBgOnEQtsUUHFxY0er2z5TWrmrYXWTFIs8NpxdFHwDH+8lr1q57dJXrW7kdhskOOlv3tv4+DnauZi4GqyaO6K2iI28QIdZftLwnTGgNFXQpTqO0Fcm161OkrzdjG6P/tIf8bPqC2PpzS7YAY6643nXNWQrIn2KpMXQ0WBFZfE234YvtndJJBlMgVWwLbY4cSQLGvAM6icjgMc8Vb7bTqxhUisSx1Of3OpSlOnJ5jnodXSMcRLK9zRKcNx9JKiNV90uxrbNEDBKUNwkMhJVXR2g4sUTEmihF6esDukCtG6UatSpCKV3bsMNvqQhTk27K504YXZYFz23RT4M7wmKG8MBMkDL+phdRpVLVpypPjNWZO5xqK8XdHM0q06Af8AshPAFw5z91Vmqw9G36r2nAEH4iXspuzT46pLvTXz8EDXK9LyMxLPu7vyQidW0GeSfQh8OGa68piTXYpvyQ1o2hzyQ+D19kPhxzQDh3t/5phQ7WR+VU+tPPay9kAFNuvNAJbVeaDx+iDx+iAntGbuSJJn9EogIBvbVFAM9U4DPyUzv0wkk56m7PyQCfdy3oTdoKgpPuc+eCTu6uM/sgB1dms0Iu1FSU2OM/TBJXdbGf3QCXez3JKescRl5JLv8uWKSnr7svJAUPrNtBJgNO6I76APdUtqs3WNaL1qaP3YTR6lzj/osNo7RUaM0uhQnPaDdJbKhkDLHcR8VzOtUqmolxVzt9u40tHDk7efi7nXGC2jpjTRszITQwOD6VdKWqDuM8VrO0QHQ3OY9pa8YtOIpNbghtBa1haDQSJGExNSNthNqpGLs8enXsK/eZwTpSkuSz8dph9PxL0CCcL0SC7yJ4rtdINLfhWsc1offfcM3SlQndwXD0pbKHDb/wB6EeZCy8SGBtAO8xh/U1ZqM3KcVKzss++bFLygoQcldXlj2Mfbot6yPiYF0N0xOcpgrqWvSn4azWeIG3y7s2SLpAThkzw4c1kNMw7tninexwluovrR0EdhCcQCLjDIjwgLBxn9Tipfdx6+vWx5CUFBOSuuXT07zpaVj9rYzFNCblAfGFWGq29IW/8ADvIoNQSH8bVXdHaNiRZ3AKSxMsZ8FSbrSqS1EIL7pcV69SdopxVKUuiu/g4mrN9Gzruac2z+B/NYu0WN0MgOlhOlQu5oQ/tWjfMcp+yg6PlR1cFJWd7e+Pkz1Fp0m0Wafdy3qSbtBUFJ9znzwSd3Vxn9l25RA6uzWaEXaipKbHGfpgkrutjP7oBLvZ7klPWOIy8kl3+XLFJT192XkgAF7aojTe2qJK/wl6pO/wAJeqAnsG7+YRR+G48kQAm9s0Sc9UYjPyQ+D1Ty2s/dAJ93PegN2hqSn1oPFjkgA1dqs0Au1NQUHj9PdQPFhkgEu9luQiesMN3kn0KTw2c/dAaj6cxr1sjnIXWjhKG0fOa2Np3TTbOYbRDJvl+BAldu8K48lqrT0a/HtDt8SLLyvOlyW5rVZYcQibGuLZ7TQZTxlNU+k5zdbg7NvD9zpN0UKdPTxqK6Sat6Iq/T6IHWWEQJEvaTh/dvzWQ03bo0JkEQWlxNHyYXUugjDBdLrCDRZoYAkREA/wAj1ZoErjf3pD5KRGEpVakb2do5XqV0pqGnpSauryw/Qwmn3EwIN7aMWC48J/Jd3TWlfwoY5zL991wSdKVCd3BdfpTPs4c8e2hfCZWVjWdjv7ZjXSM23gDI+xW1RnecYvNln3NPKChBzV1eWPY6NviXrK+JKjobpCc5TC6NvtUaFZbO+C28T2bSLpdJvZnIYVAqslpdkrPFEpN7N10ZClFy6Kn2MKezcZ9IWDhKVTi3nj1XmeQnGMFK11y6PyMdpN732MvfQm5MSlW+Mkj6S7CyQol0uEobJAyqQuz0j/8AjvlszZ9bV9WKztiWeE0sDhdaSHAETluOa1qMlqXFPPBZ9XkyjKH0lKSxyePQ47XbBFspeG3ZgU/9gFhbA6URh8TfnJZ/S7WiA4MAAEqASG0FWmGVVS7vKVOvTcndqK902SNLaVOVujbLpPu570Bu0NSVDXAjxH+hyUjxY5LrCpA1dqs0Au1NQUHj9PdQPFhkgEu9luQiesMN3kn0IeGzn7oCSL2zRCb2zRD4PVD4PVAR2Dt/Mokn8fiEQEmmzXmmFRtZj50Qi5XGaSlr7/dAOPe3fkgrV1Dlkku/y5IBe1t33QAV26bslAM6OoMslI1+EvdAb2ru+yAieXd3/mpnKg2d/wA6pPuc+aEy1d/ugNNdJtGus8aKwihLnMOTmmZHwwPFbL6SQbQXQvwxdLX7S64D927Ovmslb7HDe25FhtiNNZPAK7BFyuM1AhoVFTjyaUrdMNFtqN0dZU24q8b3vlO6SKn07h/8LCmda+29XPs3z5rI6ahxy2CYF6ffuuAMrolQkTWTt1ghxGjtWB4nekcAa/6rna2l7dl5UWz+Ldyu3ZpLHXBGWrShBJZi5PPTJgukF7sIN/b7WCDPH+p5rl6SstDmw+wvBwfrScG6t108SJ1kspGs7Yom8A3SCBxFQVyjX4S91k9PdSV3lJeODXHUceLSV1d56ZMXbL/4R4iTvCE6c98t+a6WkGWh1ls4s94EdmTIhur2ZnUkCU5LPPaIgLHDVkZ8clMNoAEMCTRQcAMF49Nd2u7cePj5iGo45sr3v4GG0iHixyfO9qXs63xmvi2MjGxwhZr1/wDZk3TIylWs1mrRCa4dm4BzTLHzX01ohgNaKSpwWH8R/Ubvjio+Pmex1HFLGeXLw8jExWPFkIibctaZB74lULDWaEXkNaJkq3R4LbsnC8DiD8VEGzthi8xoE8gFC1W1OvUheX2pJeLt++8zp6vhF4y3fwPqGwBo/eAlLyoKeS+hWrqHLJJd/lyQC9rbvurlK2CEBXbpuyUAzo6gyyUjX4S90Bvau77L0ETy7u/81JMqDZ/qdUn3P63oTLV3+6AOMtmvNDTYrzRxucZoRc4zQEdo/dyRPxJ3BEBIFyuM0Alrb/dAJbVeaAZnZyHyogEp6/LkhbeM8JZc1546yus+02m0OstgiPh2druzBhEh8d05TmKhpNA1uIMzOch8WLqh0w9gj9rDhxJTuvjv7UUwJDSAf/ZAeina/CSHW1cJfZae6sv1o4aQ0fa4kURW2f8AZCM8za54iNaREE3Fk5VBIEqLXHTKDpLR0dsCPbojnlgiThWiMWyLnNxMjObTkgPVGVznzTAXd+fmtK9AOiulH2eLaHWy+202KK2A02iMXMiPulhMxJpABqCSJqvac6FacssCJaItsdchtvuu2uKTLgEB6LbqcZo1tzivLHRFmktIxTBs9sjdoxhiuv2mKAWBzWmszWbhRXyz9Xelm2e1dvaonbXWvs3Z2qK6bmklzTMjabQE5yQG65S1t/ukp6/LkvO3U906iwbcLPa40R8KPKH+1e53ZxATc2jQEktPmCcFm+vnpo9kWHYbLFfDuSixjDeWm8RqNmCMiXEZ3mbkBu4tva2Evuh1+EvdUTqh0FaINjEe1RYsSNHk+UR7z2cOWq2TiZEg3jhiAdlXs12Kb8kAJvau77JOYuc+a84dNuntu0jbTZLG90OEYvYwmQnXHRTO6C54ImHGsiboEsxNd3/+OaWZrstULtcSGxoodvo64BPzI80B6CnLU3+6A3OK131Qm3NgWmDpExjFhxA1nbEucAWTo8zvNngQSNy1P1W6ctMTStkZEtMZ7C902vivc0/s3moJkUB6caLnGaAS1t/usZ0kLm2O0mZBECOWkEzBENxmDkeK0P1K6atEXSsJkW0RojLkYlr4r3NMmGVCZID0XLv8uSEXtbCS1f1x9Yb7DdstkIEeI2+5xExCYZgSBpfcQccAJyqCNc6A6AaX0pC/FmNqEm660xol58sxRxlxMkB6WcL/AAlv4oTe1dy80aM6T6T0NaTAjvebhBfBiRC6HEZjNjpm6SMHNzoQZSW6OmemGxtCx7VZnuaH2ftGPaS1wBlmKhwNDxBQFvOFznzSctXf7ryt0Qs+lNIxXQbNbIt9jDEN+0xWiUw3GZrMhdjSGlNNaItIbGtEZr5Bwa+KYsKI2e4ktOEsiOCA9Qg3OM0aLnGawvQvpA23WKDay2XaNM243XNcWvHlMGXAhZoCW1XmgJ/E8ETtGbuSICB4/RYnpXaXw7Da4jcWWe0PZ5thOLfkssDe2qLitEERGOhP2HNcw8QQR8kB5h6l7IyJpez35EN7SIAc3NhuLfUGTv8A1XqI+HDNeTDDtGhdJgub+0s8SYnRsWGZiYP7r2k1ynvC3pYuuPRRhhzo74biJmG+DELwcxNrSw/FAX9zRObMcCV51/SHl+soUv8ApYf82MtldC+spttjWxzYfZ2WzwmxA54JiOAvlziGzAEhRomeJnIah65OkFmttuZGskTtIYgMYXXHtk4PikiTgDgR8UBvzq5A/VdiltdhD+S4us8f8pts9rsj8wsV1UdKrHGstmskKNetMGztL4dyILobda7WLQ0yLhgVlus+uibaTj2R+YQGnv0dJfrKNPD8JE/nQF6Ib4/Red/0dGz0lGB/6SJ/Os69ENN7aogPOvXn0Q/C2kW2E2UG0OJMsGRsT6PGsOIfwXR6rOjT9K6QdHtU4kKGe2jufXtHE6rT/EakfutIzC2d+kA4/qsDIWiEB/hiLDfo3f2FsGRiQvpegNxnw4ZoabHr7ITdoKgqHm5s1/JAeW+nvQy16OtT4rGP7ERDEhR4c5M1rzZuGw9pkKyqJhZDQ3XPpKCR2rodoH/cYA6XBzLteJBxV76J9dtme0C3NMCLKRe1rnwncZCb2nhIjisD1sdJdCWqyn8MGxLYXMLYkOA6HdEwXXnOa280tmJVqQckBs7oL02gaUs74jAWRochEhuMy0kEtII2mmRkZDA0XmDo5aLTDtMN9jDjaAT2YawPdO6ZyaQQaTyW2v0ddGRALXaSCIRayG0nB7gXOMt92n+LzVC6pB/zex/xu/lvQFg0j0k6TOhRGxmWnsix4fesMMC4Wm9XsRISnVdLqJl+t4U/7uN/LK9C9J3E2K1Tys8f+U5eeuokT0vC/wDHG/llAdbrf1tLWtziZB0NjQOEGHLyH+q9LaIswhQIMOEJMZDhtAGQDQPktJ9d/Rww7X+Luzgx7k3ZNitaGyO680AjfJ25WboZ1s2NlkhwrbFMKNDaGE9m94iBoABFxpkSJTBArOVEBXf0krOwRbFEaBecyMwnMhrmFvNzviu50ail3RO0A91toaP4e0vfNyofWd0s/WlsYLOx5hMHZQWy14jnOqborNxkAMZAZ0W29IdHzYejUWzuP7RsBxiVBk9777h6E3Z8EBqTqn6XwNGWmLGjtiua+EYY7JrSQb7HVDnNEpAr660Omo0taIRgwntZDaWMDgO0e5xE6NJAyAAJw4rsdTHRuzW61RodqhdoxsEvaL72yd2kNuLXA4ErfOgOhGj7Ie0s9lYyIJycbz3Dyc8kj0IQHD1Z6DdY9G2eBHEoga57ge6Xuc+XmAQDxBVnHj9EAvbVEab21RATJn9EonYN38wiAid+mEknPU3Z+SE3tmiTnqjEZ+SAw3SPovZLc0QrVAbEu7L6h7Z1o4SIHCcjJUx3UjowP2rSRjd7Vkv5c+a2ZPu570Bu0NSgMBozobYrJBiWeBAaxkZjocQgm+5pBBm8kuzMq0yVff1N6JAn2MQ//tE/1V/GrtVmgF2pqCgKv0Y6AWHR8Q2myw3NeWFhvRHO1SWk4neAs5pjRkO1QIkKKCYcRt1zQSCRjiMF25d7LchE9YYbvJAVjor0AsViiOjWWG5j3MMIl0RzptLmuNCd7QrRO/wl6oRe2aITe2aIDE9JOj8C3whZrS0uhhwfquLatBAw8yuv0W6J2XR4iQ7KxzRELS689zqgGWOGKz056oxGfkk+7nvQCd3Vxn9lGxxmpBu0NSUGrtVmgKNprql0XGN/sDCJ/uHFg/w1YPRoXUsPUvouGREc2NFFDdiRaf5Q0rYgF2pqCol3styA4bJYocOGGQmNhw2CTWMADQBulgqpoLqw0dZ4zLRAhvbEhmbSYr3CZBGBMsCriRPWGG7yUkXtmiA4bXAbHhvhPGq9rmOkcWuBaa5UKq/Rzq4sFjjiPZ4b2xWhzQ4xHOEiCDQlW4m9s0Sc9UY7/JAcFtskOKx1niw2xIbqOa8AtIxwK1/pDqW0W582iPDBrdhxRd/ztcea2PPu570Bu0NSUBV+jXQCwaOcIkCBeiykIsQlzxkZTo0mcptAWb0zoqHHgRIMYF0OKLjgCQZGuPou6NXarNALtTUFAVnot0DsWj4jrRZWOa5zLhvRHO1S4HM7wKqzSnr7svJRLvZbkInrDDd5ICZX+EvVJ3+EvVCL2zRCb2zRAPw3HkijsHb+ZRASfB6p5bWfuhps15pxG1n70QD60HixyTKfe3fkgrV1DlkgA8fp7qB4sMlIrt03ZKAZ0dQZZIB9CHhs5+6Ty7u/80JlQbOZ+dUBJ8Hqh8HqhMtmvNDTYrzQDy2s/dPrTCo2sx86Jx7278kAHixyQeP090FauocskFdum7JAQPFhkn0IDOjqDLJJ5d3f+aAHhs5+6k+BCZUGzv8AnVHGWzXmgB8CeW1n7oabFeaYVG1mPnRAPrQeLHJOPe3fkgrV1DlkgA8fp7qB4sMlIrt03ZKAZ0dQZZICfoUHhs5+6Ty7u/8ANSTKg2cz86oAfB6ofB6oTLZrzQ02K80BEn8fiETtH7uSICSLlcZpKWtv90AuVxmgEtbf7oBKl/lyQC9rbvuku/y5IRe1t33QAa/CXugN7V3fZDr8Je6E3tXd9kAn3OfNCZau/wB0n3OfNJy1N/ugDjc4zQi5xmgNzjNGi5xmgEpa+/3SXf5ckAlrb/dJd/lyQAC9rbvug1+EvdCL2tu+6HX4S90ABvau77JPuc+aE3tXd9kn3OfNACZau/3RxucZpOWpv90BucZoARc4zSUtff7o0XOM0Alrb/dAJd/lyQC9rbvuku/y5IRe1t33QAa/CXugN7V3fZDr8Je6E3tXd9kAn3OfNCZau/3Sfc580nLU3+6AONzjNCLnGaA3OM0aLnGaAj8SdwRfX4ngiAWrAJE2B6IiAN2Pj80s+yfX5IiAiyZ+nuos+0fX5oiAN2/j8ki7Y9ERALViF9WrAIiARNgeiN2Pj80RALPsn1+SiyZ+nuiICLPtH1+aN2/j8kRAIu2PRLViERAfVqwCRNgeiIgDdj4/NLPsn1+SIgIsmfp7qLPtH1+aIgDdv4/JIu2PREQC1YhfVqwCIgOuiIgP/9k="
                    alt="Shopwithzosh"
                    className="h-8 w-8 mr-2"
                  />
               
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open, close }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <p
                                                  onClick={() =>
                                                    handleCategoryClick(
                                                      category,
                                                      section,
                                                      item,
                                                      close
                                                    )
                                                  }
                                                  className="cursor-pointer hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </p>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {true ? (
                    <div>
                      <Avatar
                        className="text-white"
                        onClick={handleUserClick}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        // onClick={handleUserClick}
                        sx={{
                          bgcolor: deepPurple[500],
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                      N
                      </Avatar>
                     
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleCloseUserMenu}>
                          Profile
                        </MenuItem>
                        
                        <MenuItem onClick={()=>navigate('/account/order')}>
                          My Orders
                        </MenuItem>
                        <MenuItem>Logout</MenuItem>
                      </Menu>
                    </div>
                  ) : (
                    <Button
                      onClick={handleOpen}
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Signin
                    </Button>
                  )}
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <p className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </p>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Button
                    className="group -m-2 flex items-center p-2"
                  >
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                     2
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
