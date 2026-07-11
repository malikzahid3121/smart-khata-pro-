const handleSave = async () => {

  const transaction = {
    title: title,
    amount: amount,
    type: type, // income ya expense
  };

  const result = await saveTransaction(transaction);

  if (result) {
    alert("Transaction Saved ✅");

    setTitle("");
    setAmount("");
  } else {
    alert("Error saving transaction ❌");
  }

};