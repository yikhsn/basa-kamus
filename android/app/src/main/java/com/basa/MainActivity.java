package com.basa;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // added for react-native-splash-screen
import android.os.Bundle; // added for react-native-splash-screen

public class MainActivity extends ReactActivity {

    /**
    * added for react-native-splash-screen after its package installed
    * */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "BASA";
    }
}
