import { Pressable, StyleSheet, Text, View } from "react-native"
import React, { useState, useEffect } from "react"
import InputForm from "../components/inputForm"
import SubmitButton from "../components/submitButton"
import { useSignInMutation } from "../services/authService"
import { setUser } from "../features/User/userSlice"
import { useDispatch } from "react-redux"
import { insertSession } from "../persistence"

const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [triggerSignIn, result] = useSignInMutation()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    useEffect(() => {
        if (result?.data && result.isSuccess) {
            insertSession({
                email: result.data.email,
                localId: result.data.localId,
                token: result.data.idToken,
            })
                .then((response) => {
                    dispatch(
                        setUser({
                            email: result.data.email,
                            idToken: result.data.idToken,
                            localId: result.data.localId,
                        })
                    )
                })
                .catch((err) => {
                   // console.log(err)
                })
        }
    }, [result])

    const onSubmit = () => {
        triggerSignIn({ email, password })
    }
    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Login to start</Text>
                <InputForm label={"email"} onChange={setEmail} error={""} />
                <InputForm 
                    label={"password"}
                    onChange={setPassword}
                    error={""}
                    isSecure={true}
                />
                <SubmitButton onPress={onSubmit} title="Send" />
                <Text style={styles.sub}>Not have an account?</Text>
                <Pressable onPress={() => navigation.navigate("Signup")}>
                    <Text style={styles.subLink}>Sign up</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor : "#F9E28E"
    },
    container: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 25,
        fontFamily: "Josefin",
        color: "black"
    },
    sub: {
        fontSize: 14,
        color: "black",
    },
    subLink: {
        fontSize: 15,
        color: "blue",
    },
    
})
