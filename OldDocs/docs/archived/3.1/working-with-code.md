# Working with Code

In this tutorial, we will see how to create and use UniWebView by code. First, we will create an `GameObject` in a new scene, then attach `UniWebView` component to it. After that, we will try to load a sample page and play it. By end of the tutorial, you will learn the essential working flow of UniWebView and the most widely used features like JavaScript invoking and UniWebView messaging system.

Enough talk, let's begin.

### Creating a UniWebView

You could start from a new Unity project, then import UniWebView to the newly created project. Simply importing from Unity Asset Store or opening the UniWebView unity package file should do the trick. You could keep all default importing files since we are working in the new project. If you haven't read the [Installation guide](/archived/3.1/installation), we recommend you that you should take several minutes to do that now. Remember to restart your Unity Editor after the importing process done, it will give Unity Editor a chance to load UniWebView editor plugin. Also change the target platform from "PC, Mac & Linux Standalone" to either "iOS" or "Android" in Build Settings.

The first task is creating a UniWebView and make it show our content. In [previous chapter](/archived/3.1/using-prefab), we did this with the prefab. Here, since we want more control on the UniWebView component, we will do it in code this time. 

Open a new scene, and add an empty `GameObject` by **GameObject → Create Empty** in menu. Rename the newly created game object to "Controller". This will be our controller object for the scene. Then, click **Assets → Create → C# Script** to create a script with "Controller" as its name. 

> Instead of C# script, you could also use Unity Script (JavaScript) as your game scripting language. We use C# here since UniWebView is written in C# and it is a more popular language in Unity world. UniWebView should work well for both languages.

Finally choose the Controller object in Hierachy tab and add Controller.cs component by using "Add Component" button in the Inspector. After these steps, your project should looks like this:

<img src="images/controller-created.png" data-rjs="2" />

Now, open Controller.cs with any text editor you like, modify the content of that file to:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Controller : MonoBehaviour {	

    UniWebView webView;

    // Use this for initialization
    void Start () {
        // Create a game object to hold UniWebView and add component.
        var webViewGameObject = new GameObject("UniWebView");
        webView = webViewGameObject.AddComponent<UniWebView>();

        // More to add...
    }
    
    // Update is called once per frame
    void Update () {
        
    }
}
```

This code will create a new `GameObject` with the name of "UniWebView" in current scene when the `Start()` method called for the Controller, which will happen when you navigate to this scene. Then, we add `UniWebView` to the game object and keep a reference to it in `webView`.

We will add more code to config the web view and load our sample page now. Add the code below to then end of `Start()` method, just below the "More to add..." comment:

```csharp
void Start () {

    //...

    webView.Frame = new Rect(0, 0, Screen.width, Screen.height);
    webView.Load("http://docs.uniwebview.com/game.html");
    webView.Show();
}
```

The first line sets the web view's frame to full screen. In iOS and Android, it will use the display size and make the web view take all area. In macOS Editor, the player screen size will be used to create a new window which contains web view. So, if you find the size of web view is too large or too small later, you could change the player size in Game tab to adjust it.

The `Load` method will do extact what you expect. Here we will load our demo page hosted on the UniWebView - Docs site.

Finally, we call `Show` to make the web view visible. This method and its opposite `Hide` method has several paramaters to control the transition. For now, we just use the default behavior, which will bring the web view visible without any anmiation. We will learn more about this topic in the [Transition](/archived/3.1/transition) chapter.

Now, you could start the game to see what will happen. If every thing goes fine, you should be able to see our demo page, which contains a canvas and two buttons:

<img src="images/game-start.png" data-rjs="2" />

The page itself does nothing interesting now. It will even navigate you to an unexisting page when clicking the "Close Page" button. Notice that there is a text saying "Call startGame() to begin". Yes, it is the key! If you take a look at the source code of that page in a desktop browser, you will see the `startGame` is a JavaScript function and it will make our web page game start.

### Listening to an Event

You may want to call that JavaScript just below the `webView.Show();` line in Controller.cs. However, it is not correct since the loading process will take some time. Before the loading of web page completes, you will not be able to acccess the JavaScript on that page.

UniWebView has a powerful event system to let you know what happens to the web view. For example, you could know when the page loading successfully finished or failed with an error; Or when the screen oreintattion was changed so you would have a chance to adjust the size of your web view. Here, we will use one of them to inspect the loading finished event. By doing so, we could ensure that the page is fully loaded and we can call the `startGame` safely.

Just continue to add more code below the final line of `Start` in previous section:

```csharp
void Start () {

    //...

    webView.Show();

    webView.OnPageFinished += (view, statusCode, url) => {
        // Page load finished
    };
}
```

`OnPageFinished` is an event of UniWebView. Whenever the web page loading finishes, it will be raised with three parameters: the web view itself, the HTTP status code for the loading result, and the loaded url.

By using `+=`, we added a action handler to this event. That means when any page loading finishes for this web view, we will run the code in this closure. Besides of `+=` operator, you can also use a method as delegate listener. If you are not familiar with `Action` or `Delegate` in C#, [this documentation](https://msdn.microsoft.com/en-us/library/018hxwa8.aspx) of .NET Framework would help to get started.

#### Some Cleaning Work

We could call the `startGame` JavaScript now. But before we dive into the new world, we have to look at another important event in UniWebView first. `OnShouldClose` is an event sent to you when the web view is about to close. The users could use the "Done" button on iOS or "Back" button on Android. Once the web view closed, the `UniWebView` component will be also destroyed to keep things clean. If you are holding the web view in a reference (e.g. here we hold the web view by `webView` field), it is a good chance to set it to `null`. Otherwise, you are likely to get into trouble later if you want to access that reference again, but it is already destroyed.

?> On Android, the "Back" button will navigate your user back to previous page. If there is no page to go back, it will send the `OnShouldClose` event and try to close the web view if `true` is returned.

To do that, add this code at the end of `Start` method:

```csharp
void Start () {

    //...

    webView.OnShouldClose += (view) => {
        webView = null;
        return true;
    };
}
```

### Unity to UniWebView - JavaScript

Our next goal is calling the `startGame`, which is a JavaScript already on the HTML page. It is deadly simple to invoke a JavaScript function, or say, evaluate a JavaScript statement from UniWebView. Just calling on `EvaluateJavaScript` will do the trick. Replace the "Page load finished" comment inside the `OnPageFinished` action body and call the JavaScript like this:

```csharp
void Start () {
    //...

    webView.OnPageFinished += (view, statusCode, url) => {
        webView.EvaluateJavaScript("startGame();", (payload)=>{
            if (payload.resultCode.Equals("0")) {
                Debug.Log("Game Started!");
            } else {
                Debug.Log("Something goes wrong: " + payload.data);
            }
        });
    };

    //...
}
```

`EvaluateJavaScript` receive the JavaScript statement as its first parameter. Here we run `startGame();`. The second parameter is an `Action` with `UniWebViewNativeResultPayload`. The native payload is used for some other web view's methods callback too, which contains basic information from native side. Here we just checked the result, and `"0"` means everything goes well.

Now, run the scene again, the game in that web view should start automatically after page loading finishes. Time to play!

<img src="images/playing-game.png" data-rjs="2" />

### UniWebView to Unity - Messaging System

When you unfortunately run into an obstacle, the game will stopped. That is not what we expected since we should be able to restart the game to chanllege again. By the help of Messaging System of UniWebView, we are able to receive a message from web view through a specified url scheme. Let's try it.

If you take a look the the HTML source, you can find this code below which will be executed when the game end:

```javascript
window.location.href = 'uniwebview://game-over?score=' + myGameArea.frameNo;
```

It tries to navigate the page to a link started with "uniwebview://" as its scheme. UniWebView could receive such navigation as a message if you listened to the corresponding event: `OnMessageReceived`. Add this code at the end of `Start()`:

```csharp
void Start () {
    //...

    webView.OnMessageReceived += (view, message) => {
        if (message.Path.Equals("game-over")) {
            var score = message.Args["score"];
            Debug.Log("Your final score is: " + score);

            // Restart the game
        }
    };
}
```

This adds a listener to `OnMessageReceived` event. When the game end, the closure will be invoked with a message object. Here we checked its path to see whether it is a game over event. All parameters in the original link will be set to `Args` parameter. We get back the final score by accessing the "score" key and then print it to the console.

Finally, we may want to restart the game. The easiest way to do so is reloading the whole page. Just call `Reload` on the web view. Add a `Restart` method and invoke it after several time:

```csharp
void Restart() {
    if (webView != null) {
        webView.Reload();
    }
}

void Start () {
    //...

    webView.OnMessageReceived += (view, message) => {
        if (message.Path.Equals("game-over")) {
            var score = message.Args["score"];
            Debug.Log("Your final score is: " + score);

            // Restart the game after 3 second
            Invoke("Restart", 3.0f);
        }
    };
}
```

Play the game again. Now you have a "flappy bird" prototype in the web view!

### Practice

#### Score to Star

Instead of displaying score point to your user, a normal choice is showing the star count for easier understanding. For example, below 500 points gives 1 start, 501~1000 gives 2 stars, etc. There is already a function to convert an input point to star count in the web page:

```javascript
function getStars(score) {
  // ...
}
```

Can you try to call it after you getting the score to see how many stars you've earned? It should be possible done by an invoking of `EvaluateJavaScript` and getting the `data` of returned payload in callback.

#### Close the web view

Finally, the "Close" button is not functional yet. The button in fact is a link to `uniwebview://close`. You can add another `if` statement in the `OnMessageReceived` to handle it. To close the web view, just call `Destroy(webView);`.

!> If you got any troble in the practice, you can find the final version of Controller.cs [here](https://gist.github.com/onevcat/9666d61d481843c41d67caf08467def1). However, we strongly suggest you try to implement it yourself first!

### Next Step

Congratulations! You got the basic ideas and have learned the essential parts of UniWebView. Now you are ready to create and use the web view in your own project.

There are much more than what mentioned in this tutorial. We prepared some further reading resource for you. If you need to know deeper about UniWebView, pick the topics you are interested in from the "[UniWebView In Depth](/archived/3.1/position-and-size)" part and keep reading. Please also read the [API Documentation](/archived/3.1/api/overview) to know details about the provided APIs.