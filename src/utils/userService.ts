import { db } from "../main";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { User } from "firebase/auth";

export type UserType = "businessman" | "student";

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  userType: UserType;
  createdAt: Date;
  updatedAt: Date;
}

export const createUserProfile = async (
  user: User,
  userType: UserType
): Promise<void> => {
  try {
    const userDocRef = doc(db, "users", user.uid);
    const userProfile: UserProfile = {
      uid: user.uid,
      email: user.email || "",
      displayName: user.displayName || "",
      userType,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await setDoc(userDocRef, userProfile);
    console.log("User profile created successfully");
  } catch (error) {
    console.error("Error creating user profile:", error);
    throw error;
  }
};

export const getUserProfile = async (
  uid: string
): Promise<UserProfile | null> => {
  try {
    const userDocRef = doc(db, "users", uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      return userDoc.data() as UserProfile;
    }
    return null;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
};

export const updateUserProfile = async (
  uid: string,
  updates: Partial<UserProfile>
): Promise<void> => {
  try {
    const userDocRef = doc(db, "users", uid);
    await setDoc(
      userDocRef,
      { ...updates, updatedAt: new Date() },
      { merge: true }
    );
    console.log("User profile updated successfully");
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
};
