import styled from "styled-components/native"

export const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.palette.white};
  position: relative;
`

export const GreetingBar = styled.View`
  width: 100%;
  height: 44px;
  padding: 0px 24px;
  align-items: flex-start;
  justify-content: center;
`

export const Header = styled.View`
  width: 100%;
  padding: 0px 24px;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 24px;
`

export const MedicationList = styled.ScrollView`
  flex: 1;
  width: 100%;
  padding: 0px 24px;
`
