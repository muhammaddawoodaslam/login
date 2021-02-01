import { apiUrls } from './../../../shared/services/api-url';
import { Component, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AudioRecordingService } from 'src/app/shared/services/audio-recording.service';
// declare var google: any;
@Component({
    selector: 'app-matches',
    templateUrl: './matches.component.html',
    styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
    questionData: any;
    public imagePath;
    imgURL: any;
    public message: string;
    rangeValue = 10;
    isSelectItem = false;
    latitude: number;
    longitude: number;
    zoom: number;
    items = [];
    tagsCtrl1 = new FormControl(this.items);
    private geoCoder;
    idTextShow = '';
    question1 =  
        {
            "status": 200, 
            "data": {
                "action": "hai/question",
                "message_id": "53161f3e72a1fa9803000102",
                "message_need_confirmation": false,
                "workout": {
                    "views": [ 
                        {
                            "id": "5f2ca0c4eb62753e3d2c9062",
                            "type": "button",
                            "inputType": "",
                            "text": "Information",
                            "buttonColor": "#95F44336",
                            "title": "0-9",
                            "textColor": "#FFFFFF"
                        },
                        {
                            "id": "5f2ca0c4eb62753e3d2c9063",
                            "type": "button",
                            "inputType": "",
                            "text": "suggestion",
                            "buttonColor": "#95F44336",
                            "title": "0-9",
                            "textColor": "#FFFFFF"
                        }
                    ],
                    "question": {
                        "id": "5f2ca0c3eb62753e3d2c9045",
                        "environmentId": "5f2c9567eb62753e3d2c7e45",
                        "name": "What can I do for you today? ",
                        "audio": "https://everythink-q-a1.sfo2.digitaloceanspaces.com/1587311201331-en-GB.wav",
                        "assistant": "https://everythink.sfo2.digitaloceanspaces.com/avatars/john/00.gif",
                        "pet": "hai_default",
                        "background": "https://everythink.sfo2.digitaloceanspaces.com/background/back_artist_720.jpg",
                        "action": "button"
                    },
                    "id": "5f2f2d653369f248beaf398d",
                    "environmentId": "5f2c9567eb62753e3d2c7e45"
                }
            }
        }
    question2 =
        {
            "status": 200,
            "data": {
                "action": "hai/question",
                "message_id": "53161f3e72a1fa9803000102",
                "message_need_confirmation": false,
                "workout": {
                    "views": [
                        {
                            "id": "5f05307dd680a61aaca78705",
                            "type": "input",
                            "inputType": "Hour",
                            "text": "Hours",
                            "buttonColor": "#4CAF51",
                            "title": "hh:mm",
                            "textColor": "#FFFFFF"
                        },
                        {
                            "id": "5f05307dd680a61aaca78706",
                            "type": "button",
                            "inputType": "",
                            "text": "Next",
                            "buttonColor": "#95039BE5",
                            "title": "next",
                            "textColor": "#FFFFFF"
                        }
                    ],
                    "question": {
                        "id": "5f05307dd680a61aaca786f8",
                        "name": "ask2?",
                        "audio": "https://everythink-q-a1.sfo2.digitaloceanspaces.com/1587404197854-en-GB.wav",
                        "assistant": "https://everythink.sfo2.digitaloceanspaces.com/avatars/kyle_engeneer/04.gif",
                        "pet": "hai_default",
                        "background": "https://everythink.sfo2.digitaloceanspaces.com/background/back_legal_720.jpg",
                        "action": "button"
                    },
                    "id": "5f053143d680a61aaca78863",
                    "environmentId": "5f052fccd680a61aaca777f8"
                }
            }
        }
    question3 =
        {
            "status": 200,
            "data": {
                "action": "hai/question",
                "message_id": "53161f3e72a1fa9803000102",
                "message_need_confirmation": false,
                "workout": {
                    "views": [
                        {
                            "id": "5f05307dd680a61aaca78707",
                            "type": "input",
                            "inputType": "Date",
                            "text": "Date",
                            "buttonColor": "#4CAF50",
                            "title": "yyyy/mm/dd",
                            "textColor": "#FFFFFF"
                        },
                        {
                            "id": "5f05307dd680a61aaca78706",
                            "type": "button",
                            "inputType": "",
                            "text": "Next",
                            "buttonColor": "#95039BE5",
                            "title": "next",
                            "textColor": "#FFFFFF"
                        }
                    ],
                    "question": {
                        "id": "5f05307dd680a61aaca786f9",
                        "name": "ask3?",
                        "audio": "https://everythink-q-a1.sfo2.digitaloceanspaces.com/1587404207745-en-GB.wav",
                        "assistant": "https://everythink.sfo2.digitaloceanspaces.com/avatars/kyle_engeneer/04.gif",
                        "pet": "hai_default",
                        "background": "https://everythink.sfo2.digitaloceanspaces.com/background/back_legal_720.jpg",
                        "action": "button"
                    },
                    "id": "5f053143d680a61aaca78863",
                    "environmentId": "5f052fccd680a61aaca777f8"
                }
            }
        }
    question4 =
        {
            "status": 200,
            "data": {
                "action": "hai/question",
                "message_id": "53161f3e72a1fa9803000102",
                "message_need_confirmation": false,
                "workout": {
                    "views": [
                        {
                            "id": "5f05307dd680a61aaca78708",
                            "type": "location",
                            "inputType": "Point",
                            "text": "Location",
                            "buttonColor": "#4CAF50",
                            "title": "lat,lng",
                            "textColor": "#FFFFFF"
                        },
                        {
                            "id": "5f05307dd680a61aaca78706",
                            "type": "button",
                            "inputType": "",
                            "text": "Next",
                            "buttonColor": "#95039BE5",
                            "title": "next",
                            "textColor": "#FFFFFF"
                        }
                    ],
                    "question": {
                        "id": "5f05307dd680a61aaca786fa",
                        "name": "ask4?",
                        "audio": "https://everythink-q-a1.sfo2.digitaloceanspaces.com/1587404215701-en-GB.wav",
                        "assistant": "https://everythink.sfo2.digitaloceanspaces.com/avatars/kyle_engeneer/04.gif",
                        "pet": "hai_default",
                        "background": "https://everythink.sfo2.digitaloceanspaces.com/background/back_legal_720.jpg",
                        "action": "button"
                    },
                    "id": "5f053143d680a61aaca78863",
                    "environmentId": "5f052fccd680a61aaca777f8"
                }
            }
        }
    question5 =
        {
            "status": 200,
            "data": {
                "action": "hai/question",
                "message_id": "53161f3e72a1fa9803000102",
                "message_need_confirmation": false,
                "workout": {
                    "views": [
                        {
                            "id": "5f05307dd680a61aaca7870a",
                            "type": "photo",
                            "inputType": "String",
                            "text": "Photo",
                            "buttonColor": "#4CAF50",
                            "title": "photo",
                            "textColor": "#FFFFFF"
                        },
                        {
                            "id": "5f05307dd680a61aaca78706",
                            "type": "button",
                            "inputType": "",
                            "text": "Next",
                            "buttonColor": "#95039BE5",
                            "title": "next",
                            "textColor": "#FFFFFF"
                        }
                    ],
                    "question": {
                        "id": "5f05307dd680a61aaca786fb",
                        "name": "ask5?",
                        "audio": "https://everythink-q-a1.sfo2.digitaloceanspaces.com/1587404224343-en-GB.wav",
                        "assistant": "https://everythink.sfo2.digitaloceanspaces.com/avatars/kyle_engeneer/04.gif",
                        "pet": "hai_default",
                        "background": "https://everythink.sfo2.digitaloceanspaces.com/background/back_legal_720.jpg",
                        "action": "button"
                    },
                    "id": "5f053143d680a61aaca78863",
                    "environmentId": "5f052fccd680a61aaca777f8"
                }
            }
        }
    question6 =
        {
            "status": 200,
            "data": {
                "action": "hai/question",
                "message_id": "53161f3e72a1fa9803000102",
                "message_need_confirmation": false,
                "workout": {
                    "views": [
                        {
                            "id": "5f05307dd680a61aaca7870b",
                            "type": "scrubber",
                            "inputType": "Number",
                            "text": "%",
                            "buttonColor": "#4CAF50",
                            "title": "0-100",
                            "textColor": "#FFFFFF"
                        },
                        {
                            "id": "5f05307dd680a61aaca78706",
                            "type": "button",
                            "inputType": "",
                            "text": "Next",
                            "buttonColor": "#95039BE5",
                            "title": "next",
                            "textColor": "#FFFFFF"
                        }
                    ],
                    "question": {
                        "id": "5f05307dd680a61aaca786fc",
                        "name": "ask6?",
                        "audio": "https://everythink-q-a1.sfo2.digitaloceanspaces.com/1587404236254-en-GB.wav",
                        "assistant": "https://everythink.sfo2.digitaloceanspaces.com/avatars/kyle_engeneer/04.gif",
                        "pet": "hai_default",
                        "background": "https://everythink.sfo2.digitaloceanspaces.com/background/back_legal_720.jpg",
                        "action": "button"
                    },
                    "id": "5f053143d680a61aaca78863",
                    "environmentId": "5f052fccd680a61aaca777f8"
                }
            }
        }
    question7 =
        {
            "status": 200,
            "data": {
                "action": "hai/question",
                "message_id": "53161f3e72a1fa9803000102",
                "message_need_confirmation": false,
                "workout": {
                    "views": [
                        {
                            "id": "5f05307dd680a61aaca7870c",
                            "type": "input",
                            "inputType": "String",
                            "text": "Last Name",
                            "buttonColor": "#4CAF50",
                            "title": "A-Za-z0-9",
                            "textColor": "#FFFFFF"
                        },
                        {
                            "id": "5f05307dd680a61aaca78706",
                            "type": "button",
                            "inputType": "",
                            "text": "Next",
                            "buttonColor": "#95039BE5",
                            "title": "next",
                            "textColor": "#FFFFFF"
                        }
                    ],
                    "question": {
                        "id": "5f05307dd680a61aaca786fd",
                        "name": "ask7?",
                        "audio": "https://everythink-q-a1.sfo2.digitaloceanspaces.com/1587404245665-en-GB.wav",
                        "assistant": "https://everythink.sfo2.digitaloceanspaces.com/avatars/kyle_engeneer/04.gif",
                        "pet": "hai_default",
                        "background": "https://everythink.sfo2.digitaloceanspaces.com/background/back_legal_720.jpg",
                        "action": "button"
                    },
                    "id": "5f053143d680a61aaca78863",
                    "environmentId": "5f052fccd680a61aaca777f8"
                }
            }
        }
    question8 =
        {
            "status": 200,
            "data": {
                "action": "hai/question",
                "message_id": "53161f3e72a1fa9803000102",
                "message_need_confirmation": false,
                "workout": {
                    "views": [
                        {
                            "id": "5f05307dd680a61aaca7870d",
                            "type": "select",
                            "inputType": "String",
                            "text": "Sexual Orientation",
                            "buttonColor": "#4CAF50",
                            "title": "public/sexual_orientation",
                            "textColor": "#FFFFFF"
                        },
                        {
                            "id": "5f05307dd680a61aaca78706",
                            "type": "button",
                            "inputType": "",
                            "text": "Next",
                            "buttonColor": "#95039BE5",
                            "title": "next",
                            "textColor": "#FFFFFF"
                        }
                    ],
                    "question": {
                        "id": "5f05307dd680a61aaca786fe",
                        "name": "ask8?",
                        "audio": "https://everythink-q-a1.sfo2.digitaloceanspaces.com/1587404253147-en-GB.wav",
                        "assistant": "https://everythink.sfo2.digitaloceanspaces.com/avatars/kyle_engeneer/04.gif",
                        "pet": "hai_default",
                        "background": "https://everythink.sfo2.digitaloceanspaces.com/background/back_legal_720.jpg",
                        "action": "button"
                    },
                    "id": "5f053143d680a61aaca78863",
                    "environmentId": "5f052fccd680a61aaca777f8"
                }
            }
        }
    question9 =
        {
            "status": 200,
            "data": {
                "action": "hai/question",
                "message_id": "53161f3e72a1fa9803000102",
                "message_need_confirmation": false,
                "workout": {
                    "views": [
                        {
                            "id": "5f05307dd680a61aaca7870f",
                            "type": "button",
                            "inputType": "",
                            "text": "Yes",
                            "buttonColor": "#954CAF50",
                            "title": "yes",
                            "textColor": "#FFFFFF"
                        },
                        {
                            "id": "5f05307dd680a61aaca78710",
                            "type": "button",
                            "inputType": "",
                            "text": "No",
                            "buttonColor": "#95F44336",
                            "title": "no",
                            "textColor": "#FFFFFF"
                        },
                        {
                            "id": "5f05307dd680a61aaca78711",
                            "type": "button",
                            "inputType": "",
                            "text": "Maybe",
                            "buttonColor": "#95F44336",
                            "title": "0-9",
                            "textColor": "#FFFFFF"
                        }
                    ],
                    "question": {
                        "id": "5f05307dd680a61aaca786ff",
                        "name": "ask9?",
                        "audio": "https://everythink-q-a1.sfo2.digitaloceanspaces.com/1587404260997-en-GB.wav",
                        "assistant": "https://everythink.sfo2.digitaloceanspaces.com/avatars/kyle_engeneer/04.gif",
                        "pet": "hai_default",
                        "background": "https://everythink.sfo2.digitaloceanspaces.com/background/back_legal_720.jpg",
                        "action": "button"
                    },
                    "id": "5f053143d680a61aaca78863",
                    "environmentId": "5f052fccd680a61aaca777f8"
                }
            }
        }
    question10 =
        {
            "status": 200,
            "data": {
                "action": "hai/question",
                "message_id": "53161f3e72a1fa9803000102",
                "message_need_confirmation": false,
                "workout": {
                    "views": [
                        {
                            "id": "5f05307dd680a61aaca7870e",
                            "type": "skill",
                            "inputType": "String",
                            "text": "Select your skills",
                            "buttonColor": "#4CAF50",
                            "title": "public/skills?key_id=work",
                            "textColor": "#FFFFFF"
                        },
                        {
                            "id": "5f05307dd680a61aaca78706",
                            "type": "button",
                            "inputType": "",
                            "text": "Next",
                            "buttonColor": "#95039BE5",
                            "title": "next",
                            "textColor": "#FFFFFF"
                        }
                    ],
                    "question": {
                        "id": "5f05307dd680a61aaca78700",
                        "name": "ask10?",
                        "audio": "https://everythink-q-a1.sfo2.digitaloceanspaces.com/1587404271147-en-GB.wav",
                        "assistant": "https://everythink.sfo2.digitaloceanspaces.com/avatars/kyle_engeneer/04.gif",
                        "pet": "hai_default",
                        "background": "https://everythink.sfo2.digitaloceanspaces.com/background/back_legal_720.jpg",
                        "action": "button"
                    },
                    "id": "5f053143d680a61aaca78863",
                    "environmentId": "5f052fccd680a61aaca777f8"
                }
            }
        }
    question11 =
        {
            "status": 200,
            "data": {
                "action": "hai/question",
                "message_id": "53161f3e72a1fa9803000102",
                "message_need_confirmation": false,
                "workout": {
                    "views": [
                        {
                            "id": "5f05307dd680a61aaca78712",
                            "type": "audio",
                            "inputType": "String",
                            "text": "Record",
                            "buttonColor": "#4CAF50",
                            "title": "audio",
                            "textColor": "#FFFFFF"
                        },
                        {
                            "id": "5f05307dd680a61aaca78706",
                            "type": "button",
                            "inputType": "",
                            "text": "Next",
                            "buttonColor": "#95039BE5",
                            "title": "next",
                            "textColor": "#FFFFFF"
                        }
                    ],
                    "question": {
                        "id": "5f05307dd680a61aaca78701",
                        "name": "ask11?",
                        "audio": "https://everythink-q-a1.sfo2.digitaloceanspaces.com/1587404280080-en-GB.wav",
                        "assistant": "https://everythink.sfo2.digitaloceanspaces.com/avatars/kyle_engeneer/04.gif",
                        "pet": "hai_default",
                        "background": "https://everythink.sfo2.digitaloceanspaces.com/background/back_legal_720.jpg",
                        "action": "button"
                    },
                    "id": "5f053143d680a61aaca78863",
                    "environmentId": "5f052fccd680a61aaca777f8"
                }
            }
        }
    question12 =
        {
            "status": 200,
            "data": {
                "action": "hai/question",
                "message_id": "53161f3e72a1fa9803000102",
                "message_need_confirmation": false,
                "workout": {
                    "views": [
                        {
                            "id": "5f05307dd680a61aaca78713",
                            "type": "broadcast",
                            "inputType": "String",
                            "text": "Broadcast",
                            "buttonColor": "#4CAF50",
                            "title": "broadcast",
                            "textColor": "#FFFFFF"
                        },
                        {
                            "id": "5f05307dd680a61aaca78706",
                            "type": "button",
                            "inputType": "",
                            "text": "Next",
                            "buttonColor": "#95039BE5",
                            "title": "next",
                            "textColor": "#FFFFFF"
                        }
                    ],
                    "question": {
                        "id": "5f05307dd680a61aaca78702",
                        "name": "ask12?",
                        "audio": "https://everythink-q-a1.sfo2.digitaloceanspaces.com/1587404288308-en-GB.wav",
                        "assistant": "https://everythink.sfo2.digitaloceanspaces.com/avatars/kyle_engeneer/04.gif",
                        "pet": "hai_default",
                        "background": "https://everythink.sfo2.digitaloceanspaces.com/background/back_legal_720.jpg",
                        "action": "button"
                    },
                    "id": "5f053143d680a61aaca78863",
                    "environmentId": "5f052fccd680a61aaca777f8"
                }
            }
        }
    question13 =
        {
            "status": 200,
            "data": {
                "action": "hai/question",
                "message_id": "53161f3e72a1fa9803000102",
                "message_need_confirmation": false,
                "workout": {
                    "views": [
                        {
                            "id": "5f05307dd680a61aaca7870f",
                            "type": "button",
                            "inputType": "",
                            "text": "Yes",
                            "buttonColor": "#954CAF50",
                            "title": "yes",
                            "textColor": "#FFFFFF"
                        },
                        {
                            "id": "5f05307dd680a61aaca78710",
                            "type": "button",
                            "inputType": "",
                            "text": "No",
                            "buttonColor": "#95F44336",
                            "title": "no",
                            "textColor": "#FFFFFF"
                        }
                    ],
                    "question": {
                        "id": "5f05307dd680a61aaca78703",
                        "name": "ask13?",
                        "audio": "https://everythink-q-a1.sfo2.digitaloceanspaces.com/1587404298467-en-GB.wav",
                        "assistant": "https://everythink.sfo2.digitaloceanspaces.com/avatars/kyle_engeneer/04.gif",
                        "pet": "hai_default",
                        "background": "https://everythink.sfo2.digitaloceanspaces.com/background/back_legal_720.jpg",
                        "action": "button"
                    },
                    "id": "5f0b3832a6da91433dfdb751",
                    "environmentId": "5f052fccd680a61aaca777f8"
                }
            }
        }
    question14 =
        {
            "status": 200,
            "data": {
                "action": "hai/question",
                "message_id": "53161f3e72a1fa9803000102",
                "message_need_confirmation": false,
                "workout": {
                    "views": [
                        {
                            "id": "5f05307dd680a61aaca78709",
                            "type": "location_radius",
                            "inputType": "Point",
                            "text": "Radio",
                            "buttonColor": "#4CAF50",
                            "title": "lat|lng|radius",
                            "textColor": "#FFFFFF"
                        },
                        {
                            "id": "5f05307dd680a61aaca78706",
                            "type": "button",
                            "inputType": "",
                            "text": "Next",
                            "buttonColor": "#95039BE5",
                            "title": "next",
                            "textColor": "#FFFFFF"
                        }
                    ],
                    "question": {
                        "id": "5f05307dd680a61aaca78704",
                        "name": "ask14?",
                        "audio": "https://everythink-q-a1.sfo2.digitaloceanspaces.com/1587404306237-en-GB.wav",
                        "assistant": "https://everythink.sfo2.digitaloceanspaces.com/avatars/kyle_engeneer/04.gif",
                        "pet": "hai_default",
                        "background": "https://everythink.sfo2.digitaloceanspaces.com/background/back_legal_720.jpg",
                        "action": "button"
                    },
                    "id": "5f053143d680a61aaca78863",
                    "environmentId": "5f052fccd680a61aaca777f8"
                }
            }
        }
    address: any;
    @ViewChild('search', { static: false })

    isRecording = false;
    recordedTime;
    blobUrl: any = '';

    public searchElementRef: ElementRef;
    fileURL: any;
    fileData: File;
    constructor(
        private apiService: ApiService,
        private ngZone: NgZone,
        private mapsAPILoader: MapsAPILoader,
        private modalService: NgbModal,
        private audioRecordingService: AudioRecordingService,
        private sanitizer: DomSanitizer
    ) {

        this.audioRecordingService.recordingFailed().subscribe(() => {
            this.isRecording = false;
        });

        this.audioRecordingService.getRecordedTime().subscribe((time) => {
            this.recordedTime = time;
        });

        this.audioRecordingService.getRecordedBlob().subscribe((data) => {
            // debugger
            this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.blob));
            this.blobToFile(data.blob, data.title);
        });

    }
 
public blobToFile = (theBlob: Blob, fileName:string): File => {
    var b: any = theBlob;
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    b.lastModifiedDate = new Date();
    b.name = fileName;
    this.fileData = <File>theBlob;
    //Cast to a File() type
    return <File>theBlob;
}
    ngOnInit(): void {
        this.getQuestion('');
        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
            this.geoCoder = new google.maps.Geocoder;

            this.setCurrentLocation();

            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    //get the place result
                    let place = google.maps.places['PlaceResult'] = autocomplete.getPlace();

                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }

                    //set latitude, longitude and zoom
                    this.latitude = place.geometry.location.lat();
                    this.longitude = place.geometry.location.lng();
                    this.zoom = 12;
                    // this.cd.detectChanges();
                });
            });

        });


    }
    onAddItem() {
        this.items.push("asd")
        this.tagsCtrl1 = new FormControl(this.items);
    }
    preview(files) {
        if (files.length === 0)
          return;
     
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
          this.message = "Only images are supported.";
          return;
        }
     
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]); 
        reader.onload = (_event) => { 
          this.imgURL = reader.result; 
        }
      }
    showNext(name) {
        this.idTextShow = name;
    }
    public onSelect(item) {
        console.log('tag selected: value is ' + item);
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
            .result.then((result) => {
                console.log(result);
            }, (reason) => {
                console.log('Err!', reason);
            });
    }
    openvideo(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
            .result.then((result) => {
                console.log(result);
            }, (reason) => {
                console.log('Err!', reason);
            });
    }
    //   valueChanged(e) {
    //     console.log('e', e , this.rangeValue);
    //     debugger
    // }
    getQuestion(query) {
        let url = apiUrls.qa_url + query;
        this.apiService.get(url).subscribe(res => {
            this.questionData = res['data'];
            console.log(res['data'])
        });
    }
    submitQuestion(data) {
        let url = apiUrls.qa_url 
        // + '?has_data=true';
        this.apiService.post(url, data).subscribe(res => {
            // if(res['status'] == 406){
            //     this.getQuestion('?has_data=true');
            // }else{
                this.questionData = res['data'];
                console.log(res['data'])
            // }
        }, err =>{
            if(err['status'] == 406){
                this.getQuestion('?has_data=true');
            }
            console.log(err);
        });
    }
    onSubmit(allData, btnData) {
        let data = {
            action: "hai/answer",
            workout: allData.workout.id,
            question: allData.workout.question.id,
            button: btnData.id,
            values: [],
            source: "socket"

        }
        let typeOfInput = '';
        let elementData = '';
        this.questionData.workout.views.forEach(element => {
            
            if(element.type == 'audio'){
                
                typeOfInput = 'audio';
                elementData = element;
            }
        });
        if(typeOfInput == 'audio'){
            this.uploadAudion(data , elementData)
           
        }else{

            this.submitQuestion(data);
        }
       

    }

    uploadAudion(data , elementData){
        let fd = new FormData();
        fd.append('workout', data.workout);
        fd.append('question', data.question);
        fd.append('button', data.button);
        fd.append('file', this.fileData);
        
        let url = apiUrls.qa_url +"/upload"
        // + '?has_data=true';
        console.log(fd.get("button"))
     
        this.apiService.post(url, fd).subscribe(res => {
                this.fileURL = res['data'][0]['url'];
                data.values.push({"_id": elementData.id,"value":this.fileURL+'.mp3'})
                this.submitQuestion(data);
                console.log(res['data'])
            // }
        }, err =>{
            if(err['status'] == 406){
                this.getQuestion('?has_data=true');
            }
            console.log(err);
        });
    }



    private setCurrentLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.zoom = 15;
            });
        }
    }
    saveItems() {
        this.isSelectItem = true;
    }
    markerDragEnd($event: any) {
        console.log($event);
        console.log($event.latLng.lat());
        console.log($event.latLng.lng());
        this.latitude = $event.latLng;
        this.getAddress(this.latitude);
    }

    getAddress(latLng) {

        this.geoCoder.geocode({ 'latLng': latLng }, (results, status) => {
            console.log(results);
            console.log(status);
            if (status === 'OK') {
                if (results[0]) {
                    this.zoom = 12;
                    this.address = results[0].formatted_address;
                    console.log(this.address)
                } else {
                    window.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }

        });
    }

    ///// audio

    startRecording() {
        if (!this.isRecording) {
            this.isRecording = true;
            this.audioRecordingService.startRecording();
        }
    }

    abortRecording() {
        if (this.isRecording) {
            this.isRecording = false;
            this.audioRecordingService.abortRecording();
        }
    }

    stopRecording() {
        if (this.isRecording) {
            this.audioRecordingService.stopRecording();
            this.isRecording = false;
        }
    }

    clearRecordedData() {
        this.blobUrl = null;
    }

    ngOnDestroy(): void {
        this.abortRecording();
    }


}
