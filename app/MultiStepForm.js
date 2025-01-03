import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "./actions/formActions"; 

const MultiStepForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form); 
  const [step, setStep] = useState(1);

  
  const handleChange = (name, value) => {
    dispatch(updateFormData({ [name]: value }));
  };

 
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  
  const renderStep1 = () => (
    <View style={styles.inputContainer}>
      <Text>Name: </Text>
      <TextInput
        style={styles.input}
        value={formData.name}
        onChangeText={(value) => handleChange("name", value)}
      />
    </View>
  );

 
  const renderStep2 = () => (
    <View style={styles.inputContainer}>
      <Text>Email: </Text>
      <TextInput
        style={styles.input}
        value={formData.email}
        onChangeText={(value) => handleChange("email", value)}
      />
    </View>
  );

  const renderStep3 = () => (
    <View style={styles.inputContainer}>
      <Text>Age: </Text>
      <TextInput
        style={styles.input}
        value={formData.age}
        onChangeText={(value) => handleChange("age", value)}
        keyboardType="numeric"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Multi-step Form with Redux</Text>

     
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}

      
      <View style={styles.buttonContainer}>
        {step > 1 && <Button title="Previous" onPress={prevStep} />}
        {step < 3 && <Button title="Next" onPress={nextStep} />}
        {step === 3 && (
          <Button
            title="Submit"
            onPress={() => {
    
              alert("Form Submitted");
            }}
          />
        )}
      </View>

      
      {(step === 1 || step === 2 || step === 3) && (
  <View style={styles.dataContainer}>
    <Text style={styles.dataTitle}>Form Data:</Text>
    <Text>Name: {formData.name}</Text>
    <Text>Email: {formData.email}</Text>
    <Text>Age: {formData.age}</Text>
  </View>
)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  dataContainer: {
    marginTop: 30,
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#f4f4f4",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  dataTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default MultiStepForm;
