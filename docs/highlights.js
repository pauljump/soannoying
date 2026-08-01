window.SO_ANNOYING_DATA = {
  "release": "v0.1",
  "collectedAt": "2026-08-01",
  "totalObservations": 1340,
  "sourceCount": 7,
  "countsBySource": {
    "r/mildlyinfuriating": 197,
    "r/CrappyDesign": 377,
    "r/assholedesign": 441,
    "r/badUX": 78,
    "r/Windows11": 212,
    "r/techsupport": 24,
    "r/apple": 11
  },
  "candidates": [
    {
      "id": "candidate-stop-unwanted-messages",
      "status": "screened",
      "title": "People cannot reliably stop unwanted email and text messages",
      "why_big": "The burden repeats, consumes attention, and can continue for months even after someone tries to unsubscribe or report it. It appears across email and text rather than belonging to one product.",
      "ai_opening": "An agent could identify the sender, find the real opt-out path, take the approved action, and verify that messages stop without exposing unrelated inbox data.",
      "uncertainty": "The current evidence is title-derived and does not establish prevalence, legal responsibility, or whether each sender is actually the same organization.",
      "evidence": [
        "https://web.archive.org/web/20230101023036/https://old.reddit.com/r/assholedesign/comments/100983v/no_unsubscribe_option_i_mailed_them_to_which_they/",
        "https://web.archive.org/web/20230120010505/https://old.reddit.com/r/assholedesign/comments/10gfmx3/relentless_emails_from_nba_that_i_never_signed_up/",
        "https://web.archive.org/web/20230104013011/https://old.reddit.com/r/assholedesign/comments/102ojrk/every_time_i_unsubscribe_from_these_texts_that_i/",
        "https://web.archive.org/web/20230103033006/https://old.reddit.com/r/assholedesign/comments/101wtev/there_is_no_way_to_unsubscribe_from_this_email/"
      ]
    },
    {
      "id": "candidate-cancel-subscriptions",
      "status": "screened",
      "title": "People cannot cancel recurring services cleanly",
      "why_big": "The failure can directly cost money and control. The same pattern appears as forced calls or chats, cancellation fees, timing traps, and confusing flows across unrelated subscriptions.",
      "ai_opening": "An agent could find the actual cancellation route, explain the consequences, prepare the request, and complete it only with explicit approval while preserving a receipt.",
      "uncertainty": "The examples are complaints about specific companies; a broader problem record needs evidence across more service types and a clear boundary around what the agent may do.",
      "evidence": [
        "https://web.archive.org/web/20230102065707/https://old.reddit.com/r/assholedesign/comments/100rb5f/sirius_xm_wont_let_you_cancel_online_unless_you/",
        "https://web.archive.org/web/20230102090818/https://old.reddit.com/r/assholedesign/comments/1015vx0/adobe_charges_me_to_cancel_a_subscription_they/",
        "https://web.archive.org/web/20230103121350/https://old.reddit.com/r/assholedesign/comments/1026lav/the_telegraph_doesnt_allow_my_digital/",
        "https://web.archive.org/web/20230104014848/https://old.reddit.com/r/assholedesign/comments/102mvzs/frustrated_with_postmates_making_my_subscription/"
      ]
    },
    {
      "id": "candidate-support-without-waiting",
      "status": "screened",
      "title": "Getting help requires waiting on a support line instead of handing off the work",
      "why_big": "The cost is time and attention, often at the exact moment something has already gone wrong. The complaint is about the support pattern itself, not one bad script or agent.",
      "ai_opening": "An agent could gather the facts, navigate the first support steps, wait asynchronously when allowed, and return with a proposed resolution or a precise escalation.",
      "uncertainty": "The current set has fewer strong examples than the cancellation set, and it does not show whether companies permit an agent to act on a customer's behalf.",
      "evidence": [
        "https://web.archive.org/web/20230607085202/https://old.reddit.com/r/badux/comments/73mxml/if_your_automated_phone_system_does_not_support/",
        "https://web.archive.org/web/20230607075018/https://old.reddit.com/r/badux/comments/73mxf9/please_stop_playing_lowfidelity_music_when/",
        "https://web.archive.org/web/20230102071620/https://old.reddit.com/r/mildlyinfuriating/comments/100sxi5/my_amazon_package_never_arrived_and_this_was/",
        "https://web.archive.org/web/20230102084629/https://old.reddit.com/r/mildlyinfuriating/comments/100t1h7/my_amazon_package_never_arrived_and_this_was_the/"
      ]
    },
    {
      "id": "candidate-price-at-checkout",
      "status": "screened",
      "title": "The real price is hard to know until the purchase is almost finished",
      "why_big": "Unexpected fees and price changes waste time and money and make comparison difficult. The pattern crosses delivery, digital goods, card payments, and online shopping.",
      "ai_opening": "An agent could inspect the full checkout path, normalize fees and terms, and show the real price before the user commits.",
      "uncertainty": "The examples show bad experiences but do not yet separate deliberate deception from ordinary taxes, regional pricing, or disclosed fees.",
      "evidence": [
        "https://web.archive.org/web/20230103165918/https://old.reddit.com/r/assholedesign/comments/102d23r/free_delivery_but_you_need_to_pay_higher_menu/",
        "https://web.archive.org/web/20230105035030/https://old.reddit.com/r/assholedesign/comments/103kwu9/really_delivery_fee_for_digital_materials/",
        "https://web.archive.org/web/20230118044647/https://old.reddit.com/r/assholedesign/comments/10etibk/company_advertises_one_price_increases_the_price/",
        "https://web.archive.org/web/20230119054733/https://old.reddit.com/r/assholedesign/comments/10fp8vo/up_charge_for_using_a_card_no_cash_option/"
      ]
    },
    {
      "id": "candidate-forced-account-data",
      "status": "screened",
      "title": "Basic access requires an account, personal data, or a specific device",
      "why_big": "People can be blocked from a simple task or pushed to hand over data they do not need to share. It affects shopping, public access, and everyday services.",
      "ai_opening": "An agent could identify the minimum information actually needed, find an accessible route, and warn the user before sharing data or creating an account.",
      "uncertainty": "The examples mix privacy concerns, business choices, and accessibility barriers. They need separate review before being treated as one problem.",
      "evidence": [
        "https://web.archive.org/web/20211008171121/https://old.reddit.com/r/badux/comments/q423h7/dear_target_you_lost_a_150_sale_because_you/",
        "https://web.archive.org/web/20230105053708/https://old.reddit.com/r/assholedesign/comments/103llbb/so_pretty_much_every_public_wifi_in_victoria_that/",
        "https://web.archive.org/web/20230104202241/https://old.reddit.com/r/assholedesign/comments/103b45t/wtf_imagine_a_world_where_you_cant_use_anything/",
        "https://web.archive.org/web/20230605135528/https://old.reddit.com/r/badux/comments/5ggy29/do_not_ask_for_login_credentials_after_allowing/"
      ]
    },
    {
      "id": "candidate-unreliable-connectivity",
      "status": "screened",
      "title": "Connectivity fails in ways ordinary people cannot diagnose",
      "why_big": "Internet and device connections are repeated, high-frequency dependencies. When they fail, the user often gets no clear reason and has to guess through a long troubleshooting loop.",
      "ai_opening": "An agent could collect the relevant state, run safe checks, identify likely causes, and carry out reversible fixes while explaining what changed.",
      "uncertainty": "Most current evidence comes from Windows support titles, so the generality beyond that ecosystem still needs testing.",
      "evidence": [
        "https://web.archive.org/web/20230101164937/https://old.reddit.com/r/Windows11/comments/100e6sy/wifi_keeps_disconnecting_disappearing_frequently/?ref=readnext_4",
        "https://web.archive.org/web/20230102073500/https://old.reddit.com/r/Windows11/comments/100n5ve/my_wifi_option_is_not_showing_up/",
        "https://web.archive.org/web/20230102212852/https://old.reddit.com/r/Windows11/comments/101o92q/i_cannot_use_wifi_wirelessly/",
        "https://web.archive.org/web/20230102080947/https://old.reddit.com/r/techsupport/comments/1000jde/usb_devices_keep_disconnecting_or_not_connecting/"
      ]
    },
    {
      "id": "candidate-cross-device-files",
      "status": "screened",
      "title": "Moving files between devices and storage systems is still too hard",
      "why_big": "The task is common, consequential, and spread across incompatible devices, operating systems, cables, cloud accounts, and storage locations. The workaround is often a confusing sequence of manual steps.",
      "ai_opening": "An agent could map where the files are, choose a safe transfer path, execute it with approval, and verify that nothing was lost or duplicated.",
      "uncertainty": "The current source set has only a few direct examples, so this is a promising lead rather than a strong candidate yet.",
      "evidence": [
        "https://web.archive.org/web/20230103155830/https://old.reddit.com/r/Windows11/comments/102bl5f/windows_11_pc_cannot_see_three_videos_all_over_5/",
        "https://web.archive.org/web/20230101173836/https://old.reddit.com/r/techsupport/comments/1004n33/best_way_to_copy_sync_or_move_files_between/"
      ]
    },
    {
      "id": "candidate-unhelpful-error-messages",
      "status": "screened",
      "title": "Software reports failure without explaining what happened or what to do next",
      "why_big": "The user is already blocked, and the error message adds confusion instead of reducing it. This repeats across ordinary software and makes every recovery attempt slower.",
      "ai_opening": "An agent could connect the error to the actual device state, translate it into likely causes, and test reversible fixes instead of making the user search blindly.",
      "uncertainty": "The current examples are low-context titles, and this candidate may need to split into diagnosis, recovery, and product-design problems.",
      "evidence": [
        "https://web.archive.org/web/20230102004524/https://old.reddit.com/r/Windows11/comments/100fqvo/does_windows_11_actually_tell_you_whats_wrong_or/",
        "https://web.archive.org/web/20230101121908/https://old.reddit.com/r/Windows11/comments/100ickf/what_does_this_error_mean_any_help_would_be_nice/",
        "https://web.archive.org/web/20210821162427/https://old.reddit.com/r/badux/comments/p8uerl/dear_reolink_do_not_tell_me_incorrect_password/"
      ]
    },
    {
      "id": "candidate-paid-products-with-ads",
      "status": "screened",
      "title": "Paid products still interrupt the user with ads or upsells",
      "why_big": "The user has already paid and still loses attention to an interruption that is hard to avoid. The pattern appears across media, games, and built-in device software.",
      "ai_opening": "An agent could identify and suppress unwanted interruptions where the user has authority, while distinguishing ads from important system messages.",
      "uncertainty": "The source set does not establish what users agreed to, and blocking commercial messages can conflict with the product's business model or terms.",
      "evidence": [
        "https://web.archive.org/web/20230103130619/https://old.reddit.com/r/assholedesign/comments/1027o8m/cant_even_play_solitaire_on_pc_without_being/",
        "https://web.archive.org/web/20230105011935/https://old.reddit.com/r/assholedesign/comments/103gbc7/paid_and_ads/",
        "https://web.archive.org/web/20230119170525/https://old.reddit.com/r/assholedesign/comments/10g4gsx/huawei_file_browser_that_came_with_a_phone_i_paid/"
      ]
    },
    {
      "id": "candidate-scheduled-appointments-still-wait",
      "status": "screened",
      "title": "A scheduled appointment does not tell you when you will actually be seen",
      "why_big": "The burden is repeated, wastes time, and is especially costly when the person has work, childcare, transportation, or health constraints. The failure is the gap between a promised appointment time and the real queue.",
      "ai_opening": "A system could track live queue state, give a realistic arrival window, and coordinate rescheduling or a remote handoff with the user's approval.",
      "uncertainty": "The current source batch repeats one underlying complaint across several pages, so it is strong evidence of a pattern in the corpus but not independent prevalence evidence.",
      "evidence": [
        "https://web.archive.org/web/20230101214539/https://old.reddit.com/r/mildlyinfuriating/comments/100txss/a_data_breach_at_a_college_i_applied_and_never/",
        "https://web.archive.org/web/20230102031735/https://old.reddit.com/r/mildlyinfuriating/comments/100u519/i_cant_see_the_other_posts_that_the_dumb_bot/",
        "https://web.archive.org/web/20230102050939/https://old.reddit.com/r/mildlyinfuriating/comments/100uws9/tried_just_ripping_a_ply_or_two_off_a_near_empty/"
      ]
    },
    {
      "id": "candidate-unwanted-junk-mail",
      "status": "screened",
      "title": "People receive large amounts of physical advertising they never asked for",
      "why_big": "It repeats, consumes attention and storage, creates waste, and has no simple universal opt-out. Unlike a single unwanted email, the burden arrives physically and is harder to filter after the fact.",
      "ai_opening": "An agent could identify senders, prepare opt-out requests, track whether they worked, and help route remaining mail to recycling without exposing unrelated household information.",
      "uncertainty": "The strongest scale claim in the source is an estimate from one poster and should not be treated as measured prevalence.",
      "evidence": [
        "https://web.archive.org/web/20230102040018/https://old.reddit.com/r/mildlyinfuriating/comments/100tkzg/my_friend_bought_a_gel_blaster_from_walmart_but/",
        "https://web.archive.org/web/20230102031735/https://old.reddit.com/r/mildlyinfuriating/comments/100u519/i_cant_see_the_other_posts_that_the_dumb_bot/",
        "https://web.archive.org/web/20230102050939/https://old.reddit.com/r/mildlyinfuriating/comments/100uws9/tried_just_ripping_a_ply_or_two_off_a_near_empty/"
      ]
    },
    {
      "id": "candidate-dating-app-bots",
      "status": "screened",
      "title": "Dating apps contain enough bot or fake accounts to undermine the basic task",
      "why_big": "The product is supposed to help people meet real people, but fake accounts waste time, create risk, and make the whole service less trustworthy. The problem is bigger than one bad profile.",
      "ai_opening": "An agent could help assess whether a conversation is likely genuine, surface evidence, and warn before a user shares money or sensitive information while leaving the decision with the user.",
      "uncertainty": "A single title gives weak evidence about scale and can confuse bots with ordinary bad matches. This needs independent reports and a safety review.",
      "evidence": [
        "https://web.archive.org/web/20230101232602/https://old.reddit.com/r/mildlyinfuriating/comments/100v2ic/dating_apps_be_like/"
      ]
    },
    {
      "id": "candidate-printers-fail-when-needed",
      "status": "screened",
      "title": "Printers fail in unpredictable ways exactly when a document is needed",
      "why_big": "Printing remains a common bridge between digital work and schools, offices, forms, and services. Failures waste time and supplies, while the device often gives little useful guidance.",
      "ai_opening": "An agent could diagnose the printer and document state, choose safe recovery steps, and verify the output rather than repeating blind retries.",
      "uncertainty": "The new batch contains one low-context printer example, so this is a lead that needs more independent evidence before advancing.",
      "evidence": [
        "https://web.archive.org/web/20230102094746/https://old.reddit.com/r/mildlyinfuriating/comments/100v0et/first_lesson_how_to_create_a_fake_sale/"
      ]
    }
  ],
  "highlights": [
    {
      "id": "cdb1d9ce748c",
      "title": "If your automated phone system does not support calling the customer back when an operator is available - UPGRADE NOW! Do not make the user hold the phone for 15 minutes!",
      "source": "r/badUX",
      "sourceUrl": "https://web.archive.org/web/20230607085202/https://old.reddit.com/r/badux/comments/73mxml/if_your_automated_phone_system_does_not_support/",
      "bucket": "Support",
      "fixability": "hardware-physical"
    },
    {
      "id": "fc6fccba8540",
      "title": "windows 11 pc cannot see three videos (all over 5 min in length) on iphone se 3, how do I transfer the videos from iphone to pc?",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230103155830/https://old.reddit.com/r/Windows11/comments/102bl5f/windows_11_pc_cannot_see_three_videos_all_over_5/",
      "bucket": "Apps",
      "fixability": "software"
    },
    {
      "id": "2093785170b9",
      "title": "AMC Stubs won't let you cancel close to your billing day unless you pay close to 50 dollars. ALSO you can't rejoin for six months",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230103171242/https://old.reddit.com/r/assholedesign/comments/102dc1k/amc_stubs_wont_let_you_cancel_close_to_your/",
      "bucket": "Subscriptions",
      "fixability": "hardware-physical"
    },
    {
      "id": "6b9f257986eb",
      "title": "Adobe charges me to cancel a subscription they have aready charged me for.",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230102090818/https://old.reddit.com/r/assholedesign/comments/1015vx0/adobe_charges_me_to_cancel_a_subscription_they/",
      "bucket": "Subscriptions",
      "fixability": "hardware-physical"
    },
    {
      "id": "6a9a36d49473",
      "title": "Frustrated with Postmates making my subscription difficult to cancel. I got Unlimited as a free trial and forgot about it until being charged today.",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230104014848/https://old.reddit.com/r/assholedesign/comments/102mvzs/frustrated_with_postmates_making_my_subscription/",
      "bucket": "Subscriptions",
      "fixability": "hardware-physical"
    },
    {
      "id": "10e74e9db6c6",
      "title": "Android quick settings and lock screen",
      "source": "r/badUX",
      "sourceUrl": "https://web.archive.org/web/20230615235516/https://old.reddit.com/r/badux/comments/i68cmf/android_quick_settings_and_lock_screen/",
      "bucket": "Apps",
      "fixability": "hardware-physical"
    },
    {
      "id": "4bf1c03959e4",
      "title": "Dear Reolink - do not tell me Incorrect Password when I add a camera to my app BEFORE YOU HAVE ASKED ME FOR THE F'N PASSWORD!",
      "source": "r/badUX",
      "sourceUrl": "https://web.archive.org/web/20210821162427/https://old.reddit.com/r/badux/comments/p8uerl/dear_reolink_do_not_tell_me_incorrect_password/",
      "bucket": "Apps",
      "fixability": "hardware-physical"
    },
    {
      "id": "0b33c357b557",
      "title": "Intel's Unison app syncs your iPhone to any Windows 11 PC. Here's how to get it.",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230124003028/https://old.reddit.com/r/Windows11/comments/101te40/intels_unison_app_syncs_your_iphone_to_any/",
      "bucket": "Apps",
      "fixability": "software"
    },
    {
      "id": "5e76389c476c",
      "title": "The placement of the End Agent Chat button in Comcasts chat support",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230119204444/https://old.reddit.com/r/assholedesign/comments/10g6xfm/the_placement_of_the_end_agent_chat_button_in/",
      "bucket": "Support",
      "fixability": "hardware-physical"
    },
    {
      "id": "2920b00bddd4",
      "title": "Sirius XM won't let you cancel online unless you chat with a live agent or call them.",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230102065707/https://old.reddit.com/r/assholedesign/comments/100rb5f/sirius_xm_wont_let_you_cancel_online_unless_you/",
      "bucket": "Subscriptions",
      "fixability": "hardware-physical"
    },
    {
      "id": "03123a15d535",
      "title": "AMC Stubs A List Won't Let You Cancel Soon before your member fee charges without charging you almost 50 dollars. AND you can't rejoin for six months",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230103170643/https://old.reddit.com/r/assholedesign/comments/102d9yi/amc_stubs_a_list_wont_let_you_cancel_soon_before/",
      "bucket": "Subscriptions",
      "fixability": "hardware-physical"
    },
    {
      "id": "d512d9c5caf0",
      "title": "Disabling the back-button on your website, will NOT make me want to stay longer or give you my business.",
      "source": "r/badUX",
      "sourceUrl": "https://web.archive.org/web/20230606182406/https://old.reddit.com/r/badux/comments/642qev/disabling_the_backbutton_on_your_website_will_not/",
      "bucket": "Websites",
      "fixability": "hardware-physical"
    },
    {
      "id": "4727fafd9c65",
      "title": "Help with files restored from UWP windows store folder",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230102230156/https://old.reddit.com/r/Windows11/comments/101qm4n/help_with_files_restored_from_uwp_windows_store/",
      "bucket": "Files",
      "fixability": "software"
    },
    {
      "id": "2f112605475a",
      "title": "I can't unsubscribe from Deezer emails because the unsubscribe button takes me to this",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230104233402/https://old.reddit.com/r/assholedesign/comments/1030s10/i_cant_unsubscribe_from_deezer_emails_because_the/?ref=readnext_1",
      "bucket": "Subscriptions",
      "fixability": "hardware-physical"
    },
    {
      "id": "4bf255be0e4c",
      "title": "no select all button on the unsubscribe tab (btw look at the scroll wheel)",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230104183703/https://old.reddit.com/r/assholedesign/comments/103a8lq/no_select_all_button_on_the_unsubscribe_tab_btw/",
      "bucket": "Subscriptions",
      "fixability": "hardware-physical"
    },
    {
      "id": "8a0aa7cbe119",
      "title": "This mail has Unsubscribe button having same color as background. Also it is just a text, no hyperlink",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230119080833/https://old.reddit.com/r/assholedesign/comments/10fvkv8/this_mail_has_unsubscribe_button_having_same/",
      "bucket": "Subscriptions",
      "fixability": "hardware-physical"
    },
    {
      "id": "0b723ac10f24",
      "title": "Patreon won't unsubscribe me from a membership I want to cancel.",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230121113615/https://old.reddit.com/r/assholedesign/comments/10ge1lu/patreon_wont_unsubscribe_me_from_a_membership_i/",
      "bucket": "Subscriptions",
      "fixability": "hardware-physical"
    },
    {
      "id": "e7b0286036ee",
      "title": "New Windows User - Privacy - Is it possible to see which app or process is periodically requesting these permissions?",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230101111729/https://old.reddit.com/r/Windows11/comments/100hi5d/new_windows_user_privacy_is_it_possible_to_see/",
      "bucket": "Apps",
      "fixability": "software"
    },
    {
      "id": "c2239b9182f7",
      "title": "How to change windows android subsystem location?",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230102083249/https://old.reddit.com/r/Windows11/comments/100lmwn/how_to_change_windows_android_subsystem_location/",
      "bucket": "Apps",
      "fixability": "software"
    },
    {
      "id": "ba018a9e35ae",
      "title": "How to snap/split screen in thirds by using keyboard commands instead of a mouse?",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230102054428/https://old.reddit.com/r/Windows11/comments/1014jd7/how_to_snapsplit_screen_in_thirds_by_using/",
      "bucket": "Design",
      "fixability": "software"
    },
    {
      "id": "4463de5740d7",
      "title": "When app icons are grouped in the taskbar any way to click on the group and bring all windows to the front?",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230103081844/https://old.reddit.com/r/Windows11/comments/1022ccv/when_app_icons_are_grouped_in_the_taskbar_any_way/",
      "bucket": "Apps",
      "fixability": "software"
    },
    {
      "id": "827c07c68423",
      "title": "Unsubscribe button takes you to a non-functioning page? At least you have an unsubscribe button.",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230104222110/https://old.reddit.com/r/assholedesign/comments/103cdar/unsubscribe_button_takes_you_to_a_nonfunctioning/",
      "bucket": "Subscriptions",
      "fixability": "hardware-physical"
    },
    {
      "id": "579984c510ac",
      "title": "Can't even watch a mov. File on my computer, and guess what Microsoft's solution is? Spend more money.",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230101155129/https://old.reddit.com/r/assholedesign/comments/1006co8/cant_even_watch_a_mov_file_on_my_computer_and/",
      "bucket": "Files",
      "fixability": "hardware-physical"
    },
    {
      "id": "bea09d8d1dfe",
      "title": "Closing an app to update it without asking the user...",
      "source": "r/badUX",
      "sourceUrl": "https://web.archive.org/web/20230917081746/https://old.reddit.com/r/badux/comments/1675a5d/closing_an_app_to_update_it_without_asking_the/",
      "bucket": "Apps",
      "fixability": "hardware-physical"
    },
    {
      "id": "18abd319b1a5",
      "title": "Phone systems should stop saying 'Please listen carefully because our menu has changed'...",
      "source": "r/badUX",
      "sourceUrl": "https://web.archive.org/web/20230604162901/https://old.reddit.com/r/badux/comments/39qngx/phone_systems_should_stop_saying_please_listen/",
      "bucket": "Support",
      "fixability": "hardware-physical"
    },
    {
      "id": "3cf691d891cc",
      "title": "YouTube app on iPhone searches for 'Shorts' first..",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230103011807/https://old.reddit.com/r/assholedesign/comments/101twn0/youtube_app_on_iphone_searches_for_shorts_first/",
      "bucket": "Apps",
      "fixability": "hardware-physical"
    },
    {
      "id": "2f58bbed826a",
      "title": "Facebook Ad where the cancel button is in another language",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230103083621/https://old.reddit.com/r/assholedesign/comments/1022mxp/facebook_ad_where_the_cancel_button_is_in_another/",
      "bucket": "Subscriptions",
      "fixability": "hardware-physical"
    },
    {
      "id": "3c6618e363f5",
      "title": "*Free Delivery, but you need to pay higher menu prices and additional service fees lol",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230103165918/https://old.reddit.com/r/assholedesign/comments/102d23r/free_delivery_but_you_need_to_pay_higher_menu/",
      "bucket": "Design",
      "fixability": "hardware-physical"
    },
    {
      "id": "b190b049ebbe",
      "title": "A huge effort by PipingRock to hide the unsubscribe button",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230103165628/https://old.reddit.com/r/assholedesign/comments/102d1k6/a_huge_effort_by_pipingrock_to_hide_the/",
      "bucket": "Subscriptions",
      "fixability": "hardware-physical"
    },
    {
      "id": "fa7ae9a15662",
      "title": "Does Windows 11 actually tell you what's wrong or is it just another chime?",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230102004524/https://old.reddit.com/r/Windows11/comments/100fqvo/does_windows_11_actually_tell_you_whats_wrong_or/",
      "bucket": "Files",
      "fixability": "software"
    },
    {
      "id": "15be5d3b98ee",
      "title": "I found probably the oldest menu in Windows 11",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230102084407/https://old.reddit.com/r/Windows11/comments/100tqcc/i_found_probably_the_oldest_menu_in_windows_11/",
      "bucket": "Files",
      "fixability": "software"
    },
    {
      "id": "17d583c54344",
      "title": "Looking for System and File Manager for Windows 11 that has similar functionality to CleanMyMac X for MacOS",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230102032700/https://old.reddit.com/r/Windows11/comments/1011vaz/looking_for_system_and_file_manager_for_windows/",
      "bucket": "Files",
      "fixability": "software"
    },
    {
      "id": "90c174661335",
      "title": "Icons are not showing up on windows 11, please help!",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230102080245/https://old.reddit.com/r/Windows11/comments/1016r0t/icons_are_not_showing_up_on_windows_11_please_help/",
      "bucket": "Files",
      "fixability": "software"
    },
    {
      "id": "56f09c6d5398",
      "title": "How to use Windows 11's File Explorer tabs",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20221226033717/https://old.reddit.com/r/Windows11/comments/101cntt/how_to_use_windows_11s_file_explorer_tabs/",
      "bucket": "Files",
      "fixability": "software"
    },
    {
      "id": "c8a14b1fa8d9",
      "title": "Black boxes on windows pop ups like app information or windows apps",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230102103401/https://old.reddit.com/r/Windows11/comments/10192hi/black_boxes_on_windows_pop_ups_like_app/",
      "bucket": "Apps",
      "fixability": "software"
    },
    {
      "id": "fb2413931d1d",
      "title": "Windows 11 is not supported with 7th gen Kabe Lake, but why?",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230102145416/https://old.reddit.com/r/Windows11/comments/101efav/windows_11_is_not_supported_with_7th_gen_kabe/",
      "bucket": "Files",
      "fixability": "software"
    },
    {
      "id": "6cd57d651cb7",
      "title": "Windows 11 Freezes / Can Sysinternals Process Monitor help?",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230102163844/https://old.reddit.com/r/Windows11/comments/101gxbb/windows_11_freezes_can_sysinternals_process/",
      "bucket": "Files",
      "fixability": "software"
    },
    {
      "id": "77a3083cff79",
      "title": "Windows install added bunch of old files from one drive",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230102165026/https://old.reddit.com/r/Windows11/comments/101h87b/windows_install_added_bunch_of_old_files_from_one/",
      "bucket": "Files",
      "fixability": "software"
    },
    {
      "id": "ab778247ab71",
      "title": "Windows 11 22H2 update causes cpu to run 5-10c hotter.",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230103021347/https://old.reddit.com/r/Windows11/comments/101v5ue/windows_11_22h2_update_causes_cpu_to_run_510c/",
      "bucket": "Files",
      "fixability": "software"
    },
    {
      "id": "0c76acb2a0f0",
      "title": "Xbox App crashing on launch - windows 11",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230123111444/https://old.reddit.com/r/Windows11/comments/101w90w/xbox_app_crashing_on_launch_windows_11/",
      "bucket": "Apps",
      "fixability": "software"
    },
    {
      "id": "e1def54a1787",
      "title": "Keyboard works on two windows simultaneously",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230103180555/https://old.reddit.com/r/Windows11/comments/102emnd/keyboard_works_on_two_windows_simultaneously/",
      "bucket": "Files",
      "fixability": "software"
    },
    {
      "id": "7bcabfbd2be9",
      "title": "The Shonen Jump app doesn't let you read more than 100 chapters in a day, even with a subscription",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230104162129/https://old.reddit.com/r/assholedesign/comments/1036pjb/the_shonen_jump_app_doesnt_let_you_read_more_than/",
      "bucket": "Subscriptions",
      "fixability": "hardware-physical"
    },
    {
      "id": "2204a7464a51",
      "title": "bid ad blocking half of screen. the most annoying part is you cant close it and it covers the submit button",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230119174609/https://old.reddit.com/r/assholedesign/comments/10g6d6z/bid_ad_blocking_half_of_screen_the_most_annoying/",
      "bucket": "Websites",
      "fixability": "hardware-physical"
    },
    {
      "id": "7668c9204c34",
      "title": "The official California employee benefits website only provides a form required for paid family leave in Spanish",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230119213050/https://old.reddit.com/r/assholedesign/comments/10gdsuo/the_official_california_employee_benefits_website/",
      "bucket": "Websites",
      "fixability": "hardware-physical"
    },
    {
      "id": "78d3be077bc3",
      "title": "Windows should not restart itself no matter how many times it warns the user that it is about to.",
      "source": "r/badUX",
      "sourceUrl": "https://web.archive.org/web/20230604234050/https://old.reddit.com/r/badux/comments/39q9iu/windows_should_not_restart_itself_no_matter_how/",
      "bucket": "Files",
      "fixability": "hardware-physical"
    },
    {
      "id": "cc82b5f823a1",
      "title": "If your site does not allow pasting into the password field, you are discouraging strong passwords.",
      "source": "r/badUX",
      "sourceUrl": "https://web.archive.org/web/20230614213123/https://old.reddit.com/r/badux/comments/59yvb7/if_your_site_does_not_allow_pasting_into_the/",
      "bucket": "Websites",
      "fixability": "hardware-physical"
    },
    {
      "id": "1f0bd92eed5c",
      "title": "Natural Direction is a terrible name for an option in the Trackpad Gesture setup in Macs and Windows. What is Natural to one person is not natural to another.",
      "source": "r/badUX",
      "sourceUrl": "https://web.archive.org/web/20230603125839/https://old.reddit.com/r/badux/comments/3zc655/natural_direction_is_a_terrible_name_for_an/",
      "bucket": "Files",
      "fixability": "hardware-physical"
    },
    {
      "id": "baab93f46087",
      "title": "Windows 10 - cannot uninstall DriverHub",
      "source": "r/techsupport",
      "sourceUrl": "https://web.archive.org/web/20230101042100/https://old.reddit.com/r/techsupport/comments/1000lka/windows_10_cannot_uninstall_driverhub/",
      "bucket": "Files",
      "fixability": "software"
    }
  ]
};
