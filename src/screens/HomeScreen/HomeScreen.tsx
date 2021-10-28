import React, { useState } from "react"
import {
  FloatingButton,
  MedicationItem,
  MedicationProps,
  Typography,
  VaccineBanner
} from "../../components"
import { Page, GreetingBar, Header, MedicationList } from "./styles"

import { format } from "date-fns"
import { Alert } from "react-native"

const MOCK = [
  {
    id: "001",
    name: "Omega 3",
    icon: "pill",
    dosage: "1 tablet",
    when: "after-meals"
  },
  {
    id: "002",
    name: "Comlivit",
    icon: "tablet",
    dosage: "1 tablet",
    when: "after-meals"
  },
  {
    id: "003",
    name: "5-HTP",
    icon: "ampoule",
    dosage: "1 ampoule",
    when: "nevermind"
  }
]

export const HomeScreen = () => {
  const [medicationList, setMedicationList] = useState(MOCK)

  const dismissMedication = (id: string) => {
    const payload = medicationList.filter(item => item.id !== id) || []
    setMedicationList(payload)
  }

  return (
    <Page>
      <GreetingBar>
        <Typography variant="body1">Hey, Sasha!</Typography>
      </GreetingBar>
      <Header>
        <Typography variant="title1">{format(new Date(), "eeee")}</Typography>
      </Header>
      <VaccineBanner />
      <MedicationList>
        {medicationList.map(item => (
          <MedicationItem
            key={item.id}
            id={item.id}
            name={item.name}
            dosage={item.dosage}
            icon={item.icon as MedicationProps["icon"]}
            when={item.when as MedicationProps["when"]}
            onDismiss={() => dismissMedication(item.id)}
          />
        ))}
      </MedicationList>

      <FloatingButton onPress={() => Alert.alert("add new medication")} />
    </Page>
  )
}
