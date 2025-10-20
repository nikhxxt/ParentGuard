package com.parentguard.child

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.google.firebase.firestore.FirebaseFirestore

class MainActivity : AppCompatActivity() {

    private val db = FirebaseFirestore.getInstance()
    private val childId = "child_001" // Replace with dynamic device ID

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Example: push consent to Firebase
        val consentData = hashMapOf(
            "consent" to true,
            "timestamp" to System.currentTimeMillis()
        )

        db.collection("children").document(childId)
            .set(consentData)
            .addOnSuccessListener { println("Consent stored") }
            .addOnFailureListener { e -> e.printStackTrace() }
    }
}
