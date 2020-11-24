---
id: midhub
title: Midhub platform
sidebar_label: Midhub platform
slug: /midhub
draft: false
---
import useBaseUrl from '@docusaurus/useBaseUrl';




### Briefly about MidHub

** **

MidHub Platform is the new more advanced tool to manage and protect their personal data for the people and the organizations with whom people interact.



Driven by the increasing complexity of the smartphones, evolution of cryptography, blockchain technology, smart contracts and the Swarm decentralized storage, we built the platform for secure and effective management of the personal data. Similar to Swarm, the idea of MidHub Platform is about handing control over the personal data back to the person. Additionally, this person gains the safe and high quality tool to provide temporary access to his/her personal data to the companies in order to solve necessary tasks.



The Platform is built using a decentralized model. The Platform participants interact without any third party intrusion and the rules of such interactions are guaranteed by the smart contract. By virtue of the above mentioned technologies we optimize and significantly decrease the business process chain for all types of organizations and the Platform participants while significantly increasing their efficiency and security. Taking into account the interest of everyone involved, we work at creating the foundation for the future development of the Platform where the person and his/her rights are in the centre of everything.



Via Midhub Platform the user may provide the access to his/her personal data for the unlimited number of web-resources and other organizations without the need to remember which data is available for access and how exactly the web-resource can manage this data. Besides the access management with regard to the personal data, the user may at any time check in his/her MidHub mobile app which companies currently have access and process his/her personal data. The single sign-on password based on the biometric info of the individual allows for the registration and authentication in the organization or web-resource within seconds while the person gives access to his/her personal data only in the amount necessary to achieve the purposes of the processing. The privacy of transactions on the Platform together with the reasonable level of their transparency allows the User not to lose control over the integrity of his/her personality and protect his/her rights when necessary.



For the Users who don’t have the official proof of identity (ID card, passport etc.), the Platform may become a kind of a “digital passport”. The IT solutions implemented on the Platform create the necessary level of trust with the organizations and web-resources by guaranteeing that every User is the unique human being. This feature creates the opportunity for Users without official proof of identity to gain access for the part of currently inaccessible online and offline services.



Based on the high level of security and control over his/her personal data as the key priorities for the User, the future vector of the Platform development is about providing the User with the opportunity to interact safely with social, commercial, financial, educational and other institutions. Today we lay the foundation for driving toward this goal.


### Main functionality of the Platform and its interaction with Swarm:



_1)    Storage of personal data (documents)_

<img src={useBaseUrl('images/midhub1.png')} />

MidHub Platform uses Swarm as the main storage of Users’ personal data mainly because Swarm is the reliable decentralized fault-tolerant data storage ensuring full control of the end user over the data lifecycle.



Personal data stands out of the overall data which can be stored in Swarm as its processing is subject to special legislation (GDPR, in particular). These laws provide special requirements for the storage of personal data. Below we will mention some of these requirements and how we plan to comply with them using Swarm:





*   Personal data confidentiality




    So as to ensure confidentiality of the Users’ personal data uploaded to Swarm, it is encrypted with the most secure of the current encryption methods (at the moment, SHA-256). We also use XOR encryption technology based on the random blocks from the owner’s file space which makes it practically impossible to hack the encrypted files in the future (even taking into account constant increase of the computation power and potential use of quantum computers).





*   Erasure of personal data by request of the data subject (“right to be forgotten”)




    Currently, Swarm protocol includes a “garbage collection” feature when the nodes are economically incentivized to delete data when its owner stops paying for the storage. We see this as a “passive erasure” of data, as, firstly, the nodes are not obliged to delete data when the owner stops paying, but rather are only incentivized to do it. And secondly, there is no specific time period when the data is deleted from the storage (in theory the data may even not be deleted at all).




    At the same time the EU personal data regulation, GDPR, and the laws on protection of personal data in other jurisdictions put quite strict rules with regard to erasure of personal data by request of the data subject. In particular, GDPR requires that in the event of the reasonable request by the data subject the controller shall delete the personal data within 1 month of receipt of the request (Article 12(3) GDPR).




    Together with the Swarm team, we have started working on the new DREAM protocol in order to ensure compliance with said legal requirements and, which is even more important, to protect the interests of the User as much as possible. The DREAM protocol should allow for the “active erasure”, i.e. guaranteed mandatory deletion of data from Swarm[^1].



_2) User’s personal data verification for its further use on the Platform_



As indicated above, MidHub Platform enables Users to give access to their personal data to the companies who are interested in the processing of the Users’ personal data for the purpose of providing these Users with goods, works, services etc. In order for these companies to trust the correctness of the personal data (taken from the official documents) uploaded to MidHub Platform, such data is subject to verification. This is a separate functionality on the Platform allowing Users to obtain the verification of their documents by the special Validators in their countries.



To obtain the verification the User shall upload his/her personal data to Swarm and provide access to it to the Validator. The results of the verification are fixed in the blockchain:


<img src={useBaseUrl('images/midhub2.png')} />




After the end of the verification procedure the Validator loses access to the personal data of the respective User (via the said DREAM protocol). The results of the verification fixed in the blockchain allow the web-resources and any other company processing the User’s personal data to make sure that the personal data under the processing has earlier been verified by the Validator.



_3) The solution for the safe processing of the User’s personal data by web-resources and other parties in full compliance with GDPR_



In a modern world we provide our personal data to the third parties massively – when registering on web-resources, submitting the documents to the state authorities, visa centres, travel agencies, medical institutions etc. The Platform allows Users to give access to such personal data without its actual transfer to the third parties’ servers, and for such third party controllers/processors, the Platform opens an opportunity to dismiss the risks related to their obligation to ensure security and confidentiality of the personal data, comparing to the case when the data is stored on their own or rented servers.



The MidHub Platform is created with the “privacy by design” and “privacy by default” principles deep in our mind. It aims for the maximum protection of the User’s interests in the area of personal data protection. Below we describe a few examples of the solutions implemented in MidHub Platform:





*   In compliance with the personal data protection rules, before the company starts processing of the personal data via MidHub Platform, it has to issue the respective Privacy Notice describing the purposes of the processing, means for processing and other relevant matters. Inside MidHub Platform there is a built-in Privacy Notice Management tool supporting the companies in creating this document inside the Platform. This tool also helps to ensure that the Privacy Notice is written in an intelligible and easily accessible form, using clear and plain language[^2]. Respectively the User may assess whether the request for his/her personal data is reasonable and necessary for the purpose of his/her interaction with the controller. Every case of the User granting consent to his/her personal data processing via MidHub Platform is recorded in the blockchain, and such record is always available for both parties.




*   In case the User decides to revoke access to his/her personal data, there is a special functionality within the MidHub Platform allowing the User to do so. When the personal data is processed based on the consent of the User, such revocation entails automatic termination of access to this personal data by the controller. When the personal data is processed on the other lawful basis (legal obligation, contract, legitimate interest etc.) the termination of access to it requires the confirmation from the controller that such basis is no more relevant and active (e.g., the contract is also terminated by the parties). Both User’s and controller’s actions to this point are recorded in the blockchain. The controller’s access to the personal data in question is terminated using the abovementioned DREAM protocol which is currently under development by the Swarm and the MidHub teams.



*   If the User and the controller have a dispute over the processing of the User’s personal data, MidHub Platform contains the functionality allowing the User to file a complaint to the data protection authority referring to the blockchain records and the respective Privacy Notice stored in Swarm as the evidence supporting the violation of the User’s rights by the controller. At that, for the controller the same blockchain records and the Privacy Notice stored in Swarm may also serve as the defence from the misuse of his/her rights by the User.


<img src={useBaseUrl('images/midhub3.png')} />



_4) The digital Document Workflow tool available for the Platform participants based on blockchain technologies and smart contracts_



Currently, in many countries the government and the companies push for the shift from paperwork to the digital document workflow, however, the progress in this area is different. One of the constraints is the requirement to identify the person acting in a digital world, signing the electronic document or supplying any information distantly so that the risk of any fraud is as low as possible.



MidHub Platform includes a panel of Validators who support the digital interaction between the Platform participants on the basis of the exchange of the verified documents via Swarm.


<img src={useBaseUrl('images/midhub4.png')} />



With the solutions implemented in MidHub Platform each party can be sure that the identity of the person signing the document at the Platform has previously been verified by the Validator, and such verification is recorded in the blockchain.



In this area MidHub Platform interacts with Swarm, in particular, in the following moments:





*   Public profiles of the companies registered at MidHub Platform together with their incorporation documents verified by the Validators are stored in Swarm.



*   The document workflow is maintained using Swarm. When the documents are to be saved and made available due to the legal rules, Swarm helps to fulfil such requirements thanks to the Swarm immutable storage system and MidHub Platform smart contracts ensuring constant payment for the storage of such documents.


### Our approach for the development:

** **

We build MidHub Platform on the basis of trust and transparency putting the User’s interests in the centre. In particular, by default, the Users’ personal data uploaded to MidHub Platform are not opened for access for the Platform administrators. And the Platform’s government model is designed as a decentralized one.



The source code of all key applications within MidHub Platform will be open for analysis and collaboration of all interested parties after the public beta.



We aim at building a global decentralized document workflow system free of third party participation where the trust model is based on blockchain technology, digital signatures and smart contracts.


<!-- Footnotes themselves at the bottom. -->
## Notes

[^1]:
     When we talk about “deletion” we mean that the data initially uploaded to Swarm becomes inaccessible for any person from some specific moment, including the person who uploaded this data to Swarm.

[^2]:

     As required by Article 7(2) of the GDPR.
