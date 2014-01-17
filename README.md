Paste, Dammit!
==============

https://github.com/correia/paste-dammit-extension

What is it?
-----------

Some websites[1] disable paste in input elements. Sometimes this is well intentioned[2], 
but still wrongheaded, and extremely annoying.

This extension fixes that misfeature.

It does not try to exhaustively detect every technique used to disable paste, but traps
the common case on the websites I use. (If it doesn't work for you, please submit a pull
request along with a test case.)

[1] I most recently ran into this on two Apple pages:

    https://appleid.apple.com
    https://supportprofile.apple.com
   
[2] The argument is for disabling paste usually falls into one of two categories:

- If I don't disable paste, users will just copy and paste their email address or 
  password a second time, and defeat the second field I've added to the form to
  ensure that the user has typed their email address or password correctly.
- Having a password on the clipboard is not terrible secure. By disabling paste,
  we will train users not to ever put their passwords on the clipboard.

Installation
------------

Download the latest binary release from the Releases page:

    https://github.com/correia/paste-dammit-extension/releases
    
Double-click on the extension to install it.

Uninstall
---------

- Open the Safari Preferences window.
- Click on Extensions in the window's toolbar.
- Select “Paste, Dammit!” in the sidebar.
- Click on the Uninstall button.
