// DONE REVIEWING: GITHUB COMMIT 3️⃣
export const classNames = function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ")
}

const fadeUpVariant = {
  from: {
    transform: "translateY(0.5rem)",
    opacity: 0
  },
  to: {
    transform: "translateY(0)",
    opacity: 1
  }
}

const transition = {
  type: "spring",
  duration: 0.3
}

export const animations = {
  navigation: {
    logo: {
      hidden: fadeUpVariant.from,
      visible: {
        ...fadeUpVariant.to,
        transition
      }
    },
    link: (delay: number) => ({
      hidden: fadeUpVariant.from,
      visible: {
        ...fadeUpVariant.to,
        transition: {
          ...transition,
          delay
        }
      }
    }),
    button: {
      hidden: fadeUpVariant.from,
      visible: {
        ...fadeUpVariant.to,
        transition: {
          ...transition,
          delay: 0.8
        }
      }
    }
  },
  header: {
    element: (delay: number) => ({
      hidden: fadeUpVariant.from,
      visible: {
        ...fadeUpVariant.to,
        transition: {
          ...transition,
          delay
        }
      }
    })
  }
}
